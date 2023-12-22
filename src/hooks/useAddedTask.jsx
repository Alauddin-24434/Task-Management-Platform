import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";


const useAddedTask= () => {
    const {data, isFetching,error,refetch}=useQuery({
        queryKey:['tasks'],
        queryFn: async ()=>{
            const {data}= await axiosSecure('/tasks')
            return data
        }
       })
       return {data, isFetching,error,refetch}
};

export default useAddedTask;
