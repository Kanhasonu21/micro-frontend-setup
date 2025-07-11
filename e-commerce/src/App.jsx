import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header/>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/shop"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>Shop Page</h1>
                <p>Coming Soon...</p>
              </div>
            }
          />
          <Route
            path="/deals"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>Deals Page</h1>
                <p>Coming Soon...</p>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>Contact Page</h1>
                <p>Coming Soon...</p>
              </div>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
