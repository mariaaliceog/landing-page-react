import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import WhoAmI from "../pages/AboutMe/AboutMe";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/whoAmI" element={<WhoAmI />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;