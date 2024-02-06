import { Link } from "react-router-dom";
import axios from "../../redux/axios";
import { fetchProducts } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const ItemManagerRemove = () => {
  const { products } = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, product]);

  const data = products.items;
  const deleteProduct = async (e: any) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.delete(`/newProducts/remove/${product}`);
        alert("Товар удален");
        setProduct(null);
      } else {
        alert("Выберите товар для удаления");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event: any) => {
    setProduct(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Удаление товара</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={deleteProduct}>
        <label htmlFor="products">Выберите товар для удаления :</label>
        <select id="products" name="products" onChange={handleChange}>
          <>
            {" "}
            <option>Выберите товар</option>
          </>
          {data.map((el: any) => (
            <option value={el._id} key={el._id}>
              {el.title}
            </option>
          ))}
        </select>
        <button type="submit">Удалить товар </button>
      </form>
    </div>
  );
};
