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
import { ItemManagerAdd } from "./pages/ItemManagerAdd/ItemManagerAdd";
import { ItemManagerRemove } from "./pages/ItemManagerRemove/ItemManagerRemove";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import { RequireAuth } from "./component/ReqireAuth/RequireAuth";
import { Auth } from "./pages/Auth/Auth";
import { TypeManagerAdd } from "./pages/TypeManagerAdd/TypeManagerAdd";
import { YarnManagerAdd } from "./pages/YarnManagerAdd/YarnManagerAdd";
import { SeasonManagerAdd } from "./pages/SeasonManagerAdd/SeasonManagerAdd";

export const ItemsContext = React.createContext([]);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsHome, setItemsHome] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jasteria.ru/api/newProducts/getAll`)
    .then((res) => {
         if (res.ok) {
           return res.json()
         }
        })
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
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <AdminPanel />
                </RequireAuth>
              }
            />
            <Route
              path="/item-manager-add"
              element={
                <RequireAuth>
                  <ItemManagerAdd />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/item-manager-remove"
              element={
                <RequireAuth>
                  <ItemManagerRemove />
                </RequireAuth>
              }
            ></Route>
             <Route
              path="/type-manager-add"
              element={
                <RequireAuth>
                  <TypeManagerAdd />
                </RequireAuth>
              }
            ></Route>
             <Route
              path="/yarn-manager-add"
              element={
                <RequireAuth>
                  <YarnManagerAdd/>
                </RequireAuth>
              }
            ></Route>
              <Route
              path="/season-manager-add"
              element={
                <RequireAuth>
                  <SeasonManagerAdd/>
                </RequireAuth>
              }
            ></Route>
          </Routes>
          <Footer />
        </div>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
