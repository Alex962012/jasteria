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

  const [activeName, setActiveName] = useState(0);
  const typeName = activeName > 0 ? `typeName=${activeName}` : "";

  const [activeSeason, setActiveSeason] = useState(0);
  const typeSeason = activeSeason > 0 ? `season=${activeSeason}` : "";
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jasteria-server-production.up.railway.app/products?${typeName}${
        typeName ? "&" : ""
      }${typeYarn}${typeName ? "&" : ""}${typeSeason}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [typeYarn, typeName, typeSeason]);
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
                  activeName={activeName}
                  onClickName={(i: number) => setActiveName(i)}
                  activeSeason={activeSeason}
                  onClickSeason={(i: number) => setActiveSeason(i)}
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
