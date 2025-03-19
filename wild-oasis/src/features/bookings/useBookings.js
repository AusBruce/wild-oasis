import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings'; // Adjust the import path as necessary

export function useBookings() {


const {
    isLoading,
    data:bookings,
    error
}= useQuery({
    queryKey:['bookings'],
    queryFn: getBookings,
  });

  return {
    isLoading,
    bookings,
    error,
  };
}