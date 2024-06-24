import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;