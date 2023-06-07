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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [itemsHome, setItemsHome] = useState([]);

  const [itemsCategory, setItemsCategory] = useState([]);
  const category = activeCategory > 0 ? `type=${activeCategory}` : "";
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://6452097cbce0b0a0f73ae70e.mockapi.io/items?${category}`)
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [activeCategory]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://6452097cbce0b0a0f73ae70e.mockapi.io/items/`)
      .then((res) => res.json())
      .then((res) => {
        setItemsHome(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="title-section">
          <Routes>
            <Route
              path="/"
              element={<Home items={itemsHome} isLoading={isLoading} />}
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  items={itemsCategory}
                  isLoading={isLoading}
                  activeCategory={activeCategory}
                  onClickCategory={(i: number) => setActiveCategory(i)}
                />
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
    </div>
  );
}

export default App;
