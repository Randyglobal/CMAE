import { Navigate } from "react-router";
import { useAuth } from "./context/AuthContext";
import { JSX } from "@fullcalendar/core/preact.js";

export default function Secure({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}