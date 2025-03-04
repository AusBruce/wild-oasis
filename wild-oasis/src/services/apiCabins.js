import supabase, { supabaseUrl } from "./supabase";

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




export async function createCabin(newCabin) {

    //https://awzhekrqsocwkmdkqvkq.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
    
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  
    // ✅ 1. Upload the image first
    // const { error: storageError } = await supabase
    //   .storage
    //   .from("cabin-images")
    //   .upload(imageName, newCabin.image);
  
    // if (storageError) {
    //   console.error(storageError);
    //   throw new Error("Cabin image could not be uploaded");
    // }
  
    // ✅ 2. Insert cabin only if image upload succeeds
    const { data, error } = await supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();
  
    if (error) {
      console.error(error);
      throw new Error("Cabin could not be created");
    }

    const { error: storageError } = await supabase
       .storage
       .from("cabin-images")
       .upload(imageName, newCabin.image);
  
// 3. delete the cabin if the image upload fails

if (storageError) {
      await supabase
        .from("cabins")
        .delete()
        .eq("id", data.id);

        console.error(storageError);
        throw new Error("Cabin image could not be uploaded");
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


