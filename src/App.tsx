import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home";
import { Footer } from "./component/Footer/Footer";
import { Catalog } from "./pages/Catalog";
import { NotFound } from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
