import { useState } from "react";
import { logInUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(logInUser(name));
        navigate('/');
    }

    return(
        <div className="m-2 flex justify-center">
            <div className="w-4/12">
                <h1 className="text-4xl font-semibold text-center">Login User</h1>
                <div className="flex justify-center mt-8">
                    <input type="text" name="name" onChange={handleChange} value={name} placeholder="User Name" className="bg-orange-200 border-2 rounded-xl text-lg border-black p-2 w-11/12" />
                </div>
                <div className="flex justify-end m-4">
                    <button onClick={handleSubmit} className="p-2 w-5/12 border border-black rounded-xl text-lg hover:bg-orange-300">Login</button>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;