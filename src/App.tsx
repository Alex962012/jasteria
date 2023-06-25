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

  const [itemsHome, setItemsHome] = useState([]);

  const [itemsCategory, setItemsCategory] = useState([]);
  const [activeYarn, setActiveYarn] = useState(0);
  const typeYarn = activeYarn > 0 ? `typeYarn=${activeYarn}` : "";

  const [activeProduct, setActiveProduct] = useState(0);
  const typeProduct = activeProduct > 0 ? `typeProduct=${activeProduct}` : "";
  console.log(`product:${typeProduct}`);

  console.log(`yarn:${typeYarn}`);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jasteria-server-production.up.railway.app/products?${typeProduct}${
        typeProduct ? "&" : ""
      }${typeYarn}`
      // `https://6452097cbce0b0a0f73ae70e.mockapi.io/items?${typeProduct}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [typeYarn, typeProduct]);
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
                  activeYarn={activeYarn}
                  onClickYarn={(i: number) => setActiveYarn(i)}
                  activeProduct={activeProduct}
                  onClickProduct={(i: number) => setActiveProduct(i)}
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
