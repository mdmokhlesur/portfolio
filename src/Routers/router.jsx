import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails/ProjectDetails";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/my-work', element: <Projects /> },
            { path: '/my-work/:slug', element: <ProjectDetails /> }
        ]
    }
])

export default router;
