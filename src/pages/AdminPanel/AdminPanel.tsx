import { Link } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div>
      <h1>AdminPanel</h1>
      <div>
        <button>
          <Link to={"/item-manager"}>Добавить товар</Link>
        </button>
        <button>
          <Link to={"/item-manager"}>Изменить товар</Link>
        </button>
        <button>
          <Link to={"/item-manager"}>Удалить товар</Link>
        </button>
      </div>
    </div>
  );
};
