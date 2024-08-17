import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import WhoAmI from "../pages/AboutMe/AboutMe";
import AboutClasses from "../pages/AboutClasses/AboutClasses";
import Prices from "../pages/AboutClasses/Sections/Prices/Prices";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/whoAmI" element={<WhoAmI />} />
                <Route path="/aboutClasses" element={<AboutClasses />} />
                <Route path="/prices" element={<Prices />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;