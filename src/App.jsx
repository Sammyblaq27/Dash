import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CrmPage from "./pages/CrmPage";
import DashboardContent from "./pages/DashboardContent";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Dashboard />, 
    children: [
      { index: true,
         element: <DashboardContent />
       },

      { path: "crm",
         element: <CrmPage />
       },
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
