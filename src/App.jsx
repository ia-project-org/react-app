import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DashHeader from "./components/dashboard-header.jsx";
import Login from './pages/login';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/dash",
            element: <DashHeader />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;