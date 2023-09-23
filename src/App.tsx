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
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import { ItemManager } from "./pages/ItemManager/ItemManager";

export const ItemsContext = React.createContext([]);
function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsHome, setItemsHome] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jasteria-alex962012.amvera.io/newProducts/getAll`)
      // fetch(`http://localhost:5000/newProducts/getAll`)
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
              {isAuth ? (
                <Route path="/admin" element={<AdminPanel />} />
              ) : (
                <Route path="/login" element={<LoginPage />} />
              )}

              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<AboutBrand />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/item-manager" element={<ItemManager />}></Route>
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
