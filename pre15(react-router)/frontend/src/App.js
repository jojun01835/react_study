import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Event, { loader as eventDetailLoader, action as deleteEventAction } from "./page/Event";
import Events, { loader as EventsLoader } from "./page/Events";
import NewEvent, { action as newEvnentAction } from "./page/NewEvent";
import EditEvent from "./page/EditEvent";
import Root from "./page/Root";
import EventsRoot from "./page/EventsRoot";
import Error from "./page/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: EventsLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <Event />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEvnentAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
