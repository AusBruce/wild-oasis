import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings'; // Adjust the import path as necessary
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {

  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status")

  const filter = !filterValue || filterValue === "all" 
  ? null : {field: "status", value: filterValue};

  // sortBy 

  const sortByRaw = searchParams.get('sortBy')|| "startDate-desc"

  const [field,direction] = sortByRaw.split("-")

  const sortBy = {field, direction}

  //PAGINATION
  const page =!searchParams.get("page")
  ? 1
  : Number(searchParams.get("page"));

//QUERY



const {
    isLoading,
    data:{ data:bookings, count}={},
    error
}= useQuery({
    queryKey:['bookings',filter,sortBy,page],
    queryFn: ()=>getBookings({filter,sortByRaw,page}),
  });


  //PRE-FETCHING
  const pageCount =Math.ceil(count/PAGE_SIZE)

  if(page< pageCount)
queryClient.prefetchQuery({

  queryKey:['bookings',filter,sortBy,page+1],
  queryFn: ()=>getBookings({filter,sortByRaw,page:page+1}),
});

if(page>1)
  queryClient.prefetchQuery({
  
    queryKey:['bookings',filter,sortBy,page-1],
    queryFn: ()=>getBookings({filter,sortByRaw,page:page-1}),
  });
  


  return {
    isLoading,
    bookings,
    error,
    count
  };
}