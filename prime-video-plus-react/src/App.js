/* App is a Component
 * imports (optional)
 * component definition
 * export
 */
import "./App.css";

// ideal place for you have layout
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // Comp must return JSX
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>
        <main className="container mt-5 pt-2">
          {/* Config the routes in between header and footer */}
          <AppRoutes />
        </main>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App; // default export
