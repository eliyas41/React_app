import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Bootstrap CSS import 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<BrowserRouter >
<App />
</BrowserRouter>

, document.getElementById("root"));
