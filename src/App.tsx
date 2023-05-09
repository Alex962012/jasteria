import "./App.css";
import { Header } from "./component/Header";
import { Item, ItemProps } from "./component/Item";
const items = require("./items.json");

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="title-section">
          <h1 className="title-section--title">
            Привет! Меня зовут Юля, я создатель бренда вязаных изделий
            «J.Asteria». ……………………. Свяжу твою мечту!
          </h1>
        </div>
        <div className="order-section">
          <div className="order-section--title">
            Вы можете заказать любое изделие из каталога по своим меркам
          </div>
          <div className="content-order">
            {items.map((el: ItemProps) => (
              <Item {...el} key={el.id} />
            ))}
          </div>
        </div>

        <footer></footer>
      </div>
    </div>
  );
}

export default App;
