import { BrowserRouter as Router, Routes, Route } from "react-router";
import Stocks from "./pages/Dashboard/Stocks";
import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Chats from "./pages/Chat/Chats";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import TwoStepVerification from "./pages/AuthPages/TwoStepVerification";
import AppLayout from "./layout/AppLayout";
import TaskList from "./pages/Task/TaskList";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductList from "./pages/Ecommerce/Stocks";
import AddProduct from "./pages/Ecommerce/AddMedication";
import {AuthProvider} from "./context/AuthContext";
import Secure from "./secure";
import CreatePatients from "./pages/Ecommerce/CreatePatients";
import Appointment from "./pages/Appointment";
import Patients from "./components/patient/Patients";
import Reports from "./pages/Ecommerce/Report";
import Provider from "./pages/Ecommerce/Provider";
import Categories from "./pages/Medicine/Categories";
import Classes from "./pages/Medicine/Classes";
import AllUsers from "./pages/Users/AllUsers";
import {ScrollToTop} from "./components/common/ScrollToTop";

export default function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={
            <Secure>
              <AppLayout />
            </Secure>
            }>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/stocks" element={<Stocks />} />

            <Route path="/appointment" element={<Appointment />} />
            <Route path="/patient" element={<Patients />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/users/patients" element={<Patients />} />
            <Route path="/chat" element={<Chats />} />

            {/* E-commerce */}
            <Route path="/products-list" element={<ProductList />} />
            <Route path="/add-medication" element={<AddProduct />} />
            <Route path="/create-patient" element={<CreatePatients />} />
            <Route path="/medicine/categories" element={<Categories />} />
            <Route path="/medicine/classes" element={<Classes />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/provider" element={<Provider />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />

            {/* Applications */}
            <Route path="/task-list" element={<TaskList />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/two-step-verification"
            element={<TwoStepVerification />}
          />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}
