import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Students from "./components/Students";
import Details from "./components/Details";

import "./App.css";

function App() {

    return (
        <BrowserRouter>

            <Header />

            <div className="container">

                <h1>React Router Application</h1>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/students" element={<Students />} />

                    <Route path="/details/:id" element={<Details />} />

                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;