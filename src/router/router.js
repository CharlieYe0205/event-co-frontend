import Events from "../pages/events/Events";
import { createBrowserRouter } from "react-router-dom";
import Event from "../pages/event/Event";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Events/>,
  },
  {
    path: "/event/:id",
    element: <Event/>,
  },
]);

export default router;




