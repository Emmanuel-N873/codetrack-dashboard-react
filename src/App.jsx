import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<SignInPage />} path="/signin" />
            <Route element={<SignUpPage />} path="/signup" />
            <Route element={<DashBoardPage />} path="/dashboard" />
            <Route element={<Navigate replace to="/signin" />} path="*" />
        </Routes>
    </BrowserRouter>
);

export default App;
