import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

const CollegeCompass = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>;
};

export default CollegeCompass;