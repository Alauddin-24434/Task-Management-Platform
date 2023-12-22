import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../api/getRole";
// import { getRole } from "../api/house";


const useRole = () => {
    const { user } = useAuth()
    const [role, setRole] = useState(null)
    useEffect(() => {
        getRole(user?.email)
        .then(data=>{
            setRole(data)
        })
    }, [user])
    return [role]
};

export default useRole;