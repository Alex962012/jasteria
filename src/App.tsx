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
  const [items, setItems] = useState([
    {
      category: 0,
      items: [
        {
          id: 0,
          imageUrl:
            "https://github.com/Alex962012/jasteria-img/blob/main/%D0%92%D0%B0%D1%80%D0%B5%D0%B6%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%B0%D0%BD%D0%B3%D0%BE%D1%80%D1%8B%20%D0%B2%204%20%D0%BD%D0%B8%D1%82%D0%B8/IMG_20221203_120652_829.jpg?raw=true",
          title: "Варежки из ангоры ",
          price: 2300,
          category: 0,
          images: [
            "https://github.com/Alex962012/jasteria-img/blob/main/%D0%92%D0%B0%D1%80%D0%B5%D0%B6%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%B0%D0%BD%D0%B3%D0%BE%D1%80%D1%8B%20%D0%B2%204%20%D0%BD%D0%B8%D1%82%D0%B8/IMG_20221203_120652_829.jpg?raw=true",
          ],
          description:
            "Тёплые варежки, связаны из пушистой шерсти ангоры. В них не будет холодно даже зимой.",
          typeOfYarn: "Ангора",
        },
      ],
    },
  ]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://6452097cbce0b0a0f73ae70e.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
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
              path="/#"
              element={<Home items={items} isLoading={isLoading} />}
            />
            <Route
              path="/catalog"
              element={<Catalog items={items} isLoading={isLoading} />}
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
