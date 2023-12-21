import axiosSecure from "."

export const saveUser=async user=>{
    const currentUser={
        userName:user?.displayName,
        email: user?.email,
        role: 'user',
        status: 'verified'
      }
      const {data}=await axiosSecure.put(`/users/${user?.email}`,currentUser)
      return data;
    }