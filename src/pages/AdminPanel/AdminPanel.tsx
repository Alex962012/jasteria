import { Link } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div>
      <h1>AdminPanel</h1>
      <div>
        <div>
          <button>
            <Link to={"/item-manager-add"}>Добавить товар</Link>
          </button>
          <button>
            <Link to={"/item-manager"}>Изменить товар</Link>
          </button>
          <button>
            <Link to={"/item-manager"}>Удалить товар</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={"/season-manager-add"}>Добавить сезон</Link>
          </button>
          <button>
            <Link to={""}>Изменить сезон</Link>
          </button>
          <button>
            <Link to={""}>Удалить сезон</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={"/type-manager-add"}>Добавить тип изделия</Link>
          </button>
          <button>
            <Link to={""}>Изменить тип изделия</Link>
          </button>
          <button>
            <Link to={""}>Удалить тип изделия</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={"/yarn-manager-add"}>Добавить вид пряжи</Link>
          </button>
          <button>
            <Link to={""}>Изменить вид пряжи</Link>
          </button>
          <button>
            <Link to={""}>Удалить вид пряжи</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
