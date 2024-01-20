import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createType, fetchTypes } from "../../redux/slices/types";
import { Link } from "react-router-dom";
import "./TypeManagerAdd.css";
export const TypeManagerAdd = () => {


  const  {types}  = useSelector((state:any) => state.types);
  const dispatch = useDispatch();
  const [type, setType] = useState<any>('');

  let result: string | any[];
  let typesData;

  if (types.items) {
    typesData = types.items;
    result = typesData.filter((i:any) => i.name.toLowerCase() === type.toLowerCase());
}
  console.log(types)
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);



  const resetParams = () => {
    setType("");

  };
  const addProduct = async (e: any) => {
    e.preventDefault();
    if (type.length<=0) {
      alert("Введите тип изделия");
      return;
    }
 
    if (result && result.length > 0) {
      alert("Такое название уже есть");
      return;
  }


 
const formData = new FormData();
formData.append("name", type);


    try {
      dispatch(createType(formData));
      alert("Тип изделия создан");
      resetParams();
    } catch (response) {
      console.log(response);
    }
  };
  console.log(type)
  return (
    <div>
      <div>
        <h2>Создание товара</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={addProduct}>
        <label htmlFor="title">Введите тип изделия</label>
        <input
          type="text"
          id="type"
          name="type"
          placeholder="Варежки/перчатки"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button type="submit">Создать </button>
      </form>
    </div>
  );
};
