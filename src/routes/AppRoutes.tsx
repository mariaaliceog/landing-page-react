import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import WhoAmI from "../pages/AboutMe/AboutMe";
import AboutClasses from "../pages/AboutClasses/AboutClasses";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/whoAmI" element={<WhoAmI />} />
                <Route path="/aboutClasses" element={<AboutClasses />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;