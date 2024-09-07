import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNew from "./Components/Body/AddNew";
import UserLogin from "./Components/Body/UserLogin";

const App = () => {
    return(
        <div className=" w-screen h-full min-h-screen bg-orange-200">
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            <Routes>
            <Route path="/" element={<Body />} />
            <Route path='/add-new' element={<AddNew />} />
            <Route path='/user' element={<UserLogin />} />
            </Routes>
            </Provider>
            </BrowserRouter>
        </div>
    )
}

export default App;