
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import Navbar from "./globals/components/navbar/Navbar";
import Footer from "./globals/components/footer/Footer";
import Form from "./globals/components/forms/Form";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
export default App;
