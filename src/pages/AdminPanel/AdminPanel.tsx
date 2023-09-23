import { Link } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div>
      <h1>AdminPanel</h1>
      <button>
        <Link to={"/item-manager"}>Добавить товар</Link>
      </button>
    </div>
  );
};
