import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins'; // Adjust the import path as necessary

export function useCabins() {


const {
    isLoading,
    data:cabins,
    error
}= useQuery({
    queryKey:['cabins'],
    queryFn: getCabins,
  });

  return {
    isLoading,
    cabins,
    error,
  };
}