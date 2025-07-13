import ThemeToggle from "./components/ThemeToggle";
import AppRoutes from "./routes/routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <ThemeToggle />
      <Toaster />
      <AppRoutes />
    </>
  );
}

export default App;
