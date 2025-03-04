import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


function CreateCabinForm() {

  const queryClient = useQueryClient();
  
  const{mutate,isLoading:isCreating} = useMutation(
    {
      mutationFn: createCabin,
      onSuccess: () => {
        toast.success("Cabin created successfully");
        queryClient.invalidateQueries({ queryKey:["cabins"]});
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
      },

    }
  );



  const{register,handleSubmit,reset,getValues,formState} =useForm();

  const { errors } = formState;
  console.log(errors);

function onSubmit(data) {
  mutate(data);
}

function onError(error) {
  console.error(error);
}
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow >
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name",{
          required: "Cabin name is required",
          minLength: {
            value: 3,
            message: "Cabin name must be at least 3 characters long",
          },
        })} />

        {errors?.name?.message && <Error>{errors.name.message}</Error>} 
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",{
          required: "Cabin name is required",
          min: {
            value: 1,
            message: "capacity should be  at least 1 ",
          },
          
          })}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice",{
          required: "Cabin name is required",
          min: {
            value: 1,
            message: "price should be at least 1 guest",
          },
          })} />
      </FormRow>

      <FormRow>
  <Label htmlFor="discount">Discount</Label>
  <Input
    type="number"
    id="discount"
    defaultValue={0}
    {...register("discount", {
      required: "Discount is required",
      validate: (value) => value <= getValues().regularPrice|| "Discount should be less than price",
    })}
  />
</FormRow>


      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" {...register("description",{
          required: "Cabin name is required",})}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
