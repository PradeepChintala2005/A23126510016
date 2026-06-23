import { useEffect } from "react";
import { Log } from "./utils/logger";
import { NotificationsPage } from "./pages/NotificationsPage";

export default function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "component",
      "Application Started"
    );
  }, []);

  return <NotificationsPage />;
}