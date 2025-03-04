

function FormRow() {
  return ( 
  
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
);
}


export default FormRow