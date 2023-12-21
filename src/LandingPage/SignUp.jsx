
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { saveUser } from "../api/auth";


const SignUp = () => {
    const { createUser, googleSignIn, } = useAuth()
    const navigate = useNavigate()
    const handleSignUp = async (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPassword = form.password.value;
        console.log(userName, userEmail, userPassword)

        try {
           const result=await createUser(userEmail, userPassword)
           await saveUser(result?.user)
        }
        catch (err) {
            console.log(err.message)
        }

    }

    // google sign in ---------------
    const handleGoogleSignUp = async () => {
        try {
            // 2. user registration with google
            const result=await googleSignIn();

            await saveUser(result?.user)


            navigate('/');
            toast.success('SignUp successfully');
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="User Name"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring focus:ring-violet-200"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="User Email"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring focus:ring-violet-200"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring focus:ring-violet-200"
                        />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200">
                        Sign in
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 border-t dark:border-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 border-t dark:border-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignUp} aria-label="Log in with Google" className="p-3 rounded-sm border">
                        <FcGoogle />

                    </button>

                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm border">
                        <FaGithubSquare />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to='/login' className="underline dark:text-gray-100">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
