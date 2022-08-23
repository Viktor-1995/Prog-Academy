import "./App.css";
import Countries from "./components/Countries";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="bg-dark p-4" id="app">
            {/* <Countries /> */}
            <Products />
        </div>
    );
}

export default App;
