import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
    return (
        <div className="App">
            <Router className="router" basename="/Recipes-project">
                <Header />
                <main className="container content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/category/:strCategory"
                            element={<Category />}
                        />
                        <Route path="/meal/:idMeal" element={<Recipe />} />
                        <Route exact path="*" element={<ErrorPage />} />
                    </Routes>
                </main>
                <Footer className="footer" />
            </Router>
        </div>
    );
}

export default App;
