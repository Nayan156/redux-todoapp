import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/todoListSlice";
import { useNavigate } from "react-router-dom";

const AddNew = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [object, setObject] = useState({
        name: "",
    })

    const handleChange = (e) => {
        setObject({
            ...object,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        dispatch(addItem(object))
        navigate('/');
    }
    return(
        <div className="m-2 flex justify-center">
            <div className="w-4/12">
                <h1 className="text-4xl font-semibold text-center">Add New Todo</h1>
                <div className="flex justify-center mt-8">
                    <input type="text" name="name" onChange={handleChange} value={object.name} placeholder="Todo Name" className="bg-orange-200 border-2 rounded-xl text-lg border-black p-2 w-11/12" />
                </div>
                <div className="flex justify-end m-4">
                    <button onClick={handleSubmit} className="p-2 w-5/12 border border-black rounded-xl text-lg hover:bg-orange-300">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddNew;