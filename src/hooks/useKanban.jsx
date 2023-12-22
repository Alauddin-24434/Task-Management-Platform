// useKanban.jsx

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../api";

const useKanban = () => {
  const { user } = useAuth();

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ['usekanban', user?.email],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(`/user/${user?.email}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  });

  return { data, isLoading, isFetching, error, refetch };
};

export default useKanban;
