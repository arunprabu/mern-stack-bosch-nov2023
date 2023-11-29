/* App is a Component 
  * imports (optional)
  * component definition
  * export
*/
import './App.css';

// ideal place for you have layout
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PrimeVideoPage from "./pages/PrimeVideoPage/PrimeVideoPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "./pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // Comp must return JSX
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="container mt-5 pt-2">
        <p className='red-text'>wow</p>
        {/* Config the routes in between header and footer */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prime-video" element={<PrimeVideoPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App; // default export
