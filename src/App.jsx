import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import StartingPage from "./pages/StartingPage";
import AppLayout from "./pages/AppLayout";
import Weather from "./pages/Weather";
import Cities from "./pages/Cities";
import Map from "./pages/Map";
import Setting from "./pages/Setting";
import { WeatherProvider as WeatherAPIProvider } from "./context/WeatherContextAPI";
import CitiesAside from "./features/cities/CitiesAside";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartingPage />,
    index: true,
  },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "weather",
        element: <Weather />,
        index: true,
      },
      {
        path: "cities",
        element: <Cities />,
        children: [
          {
            path: ":id",
            element: <CitiesAside />,
          },
        ],
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <WeatherAPIProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </WeatherAPIProvider>
    </>
  );
}

export default App;
