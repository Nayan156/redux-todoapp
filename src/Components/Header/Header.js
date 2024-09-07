import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logOutUser } from "../../utils/userSlice";

const Header = () => {

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user.loggedInUser);

    const handleLogout = () => {
        dispatch(logOutUser());
    }

    return(
        <div className="w-screen h-28 bg-emerald-500 flex justify-between">
            <Link to='/'>
                <div className="Logo flex pt-2 pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg> 
                <h1 className="text-4xl font-semibold mt-6">TODO</h1>
                </div>
            </Link>

            <div className="mt-10 mr-10 flex space-x-6">
            <Link to='/add-new'>
                <h1 className="text-xl font-semibold">New Todo</h1>
            </Link>
            {user === "Default"?<Link to='/user'>
                <h1 className="text-xl font-semibold">User Login</h1>
            </Link>:
            <button className="text-xl font-semibold mb-11" onClick={handleLogout}>Logout {user}</button>}
            </div>
        </div>
    )
}

export default Header