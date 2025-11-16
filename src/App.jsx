import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DevSlice from "./components/DevSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewDevSlice from "./components/ViewDevSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/devSlices",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <DevSlice />
      </div>
    ),
  },
  {
    path: "/devSlices/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewDevSlice />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
