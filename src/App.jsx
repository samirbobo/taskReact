import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./Pages/Dashboard";
import TailwindLandingPage from "./Pages/TailwindLandingPage";
import MuiLandingPage from "./Pages/MuiLandingPage";
import UserDetails from "./Pages/UserDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="user/:userId" element={<UserDetails />} />
      <Route path="tailwind" element={<TailwindLandingPage />} />
      <Route path="mui" element={<MuiLandingPage />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
