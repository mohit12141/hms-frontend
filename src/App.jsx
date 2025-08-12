import Navbar from "./components/Navbar";
import AppointmentsPage from "./pages/AppointmentsPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <AppointmentsPage />
    </div>
  );
}
