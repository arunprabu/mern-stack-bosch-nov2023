/* App is a Component 
  * imports (optional)
  * component definition
  * export
*/

// ideal place for you have layout
import Header from "./components/Header";
import Footer from './components/Footer';

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // Comp must return JSX
  return (
    <div>
      <Header></Header>
      <main className="container mt-5 pt-2">
        <h1>Success!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App; // default export
