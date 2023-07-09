import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./component/Footer/Footer";
import { Catalog } from "./pages/Catalog/Catalog";
import { NotFound } from "./component/NotFound/NotFound";
import { FeedbackPage } from "./pages/Feedback-Page/FeedbackPage";
import { Faq } from "./pages/Faq/Faq";
import { AboutBrand } from "./pages/AboutBrand/AboutBrand";
import { useEffect, useState } from "react";
import React from "react";

export const ItemsContext = React.createContext([]);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsHome, setItemsHome] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jasteria-server-production.up.railway.app/products`)
      .then((res) => res.json())
      .then((res) => {
        setItemsHome(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <div className="App">
      <ItemsContext.Provider value={itemsHome}>
        <div className="wrapper">
          <Header />
          <div className="title-section">
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route
                path="/catalog"
                element={
                  <Catalog isLoading={isLoading} setIsLoading={setIsLoading} />
                }
              />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<AboutBrand />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
