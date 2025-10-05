import './App.css'
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRouter />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;


