import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";
import { Toaster } from "react-hot-toast";

function App() {
  const authChecked = useAuthCheck();
  return authChecked ? (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  ) : (
    <div></div>
  );
}

export default App;
