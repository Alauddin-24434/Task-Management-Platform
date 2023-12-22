import { Link, useNavigate } from "react-router-dom";
import MenuItem from "../MenuItem";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import UserMenu from "./Menu/UserMenu";
import AdminMenu from "./Menu/AdminMenu";


const Sidebar = () => {
    const { logout } = useAuth()
    const [role] = useRole()
    console.log("my role",role)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/")
    }
    return (
        <>
            {/* small screen */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>

            </div>
            {/* sidebar */}
            <div className='z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform 
           md:translate-x-0  transition duration-200 ease-in-out'>
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                HOME
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>
                            <MenuItem
                                label='Profile'
                                address='user-profile'
                            />

                        
                         
                        
                        
                            {
                                role?.role === "user" &&  <UserMenu/>
                            }
                        
                            {
                                role?.role === "admin" && <AdminMenu />
                            }
                        </nav>
                    </div>
                </div>

                <div>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>



        </>
    );
};

export default Sidebar;