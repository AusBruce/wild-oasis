import supabase from "./supabase";

export async function getCabins() {

   
const { data, error } = await supabase
.from('cabins')
.select('*')


if (error){
    console.error(error);
    throw new Error("Cabins could not be loaded")

}

return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from("cabins")
        .delete()
        .eq("id", id);

    if (error) {
       
        throw new Error(error.message || "Cabin could not be deleted"); // Use actual error message
    }

    return data;
}


