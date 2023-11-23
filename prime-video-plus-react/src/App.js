/* App is a Component 
  * imports (optional)
  * component definition
  * export
*/

import Header from "./components/Header";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // Comp must return JSX
  return (
    <div>
      <Header></Header>
      <h1>Success!</h1>
    </div>
  );
}

export default App; // default export
