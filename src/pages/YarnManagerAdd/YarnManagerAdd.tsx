import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {createYarn,fetchYarns } from "../../redux/slices/yarns";
import { Link } from "react-router-dom";
import "./YarnManagerAdd.css";
export const YarnManagerAdd = () => {


  const  {yarns}  = useSelector((state:any) => state.yarns);
  const dispatch = useDispatch();
  const [yarn,setYarn] = useState<any>('');

  let result: string | any[];
  let yarnsData;

  if (yarns.items) {
    yarnsData =  yarns.items;
    result =  yarnsData.filter((i:any) => i.name.toLowerCase() ===   yarn.toLowerCase());
}
  console.log(yarns)
  useEffect(() => {
    dispatch(fetchYarns());
  }, [dispatch]);



  const resetParams = () => {
    setYarn("");

  };
  const addProduct = async (e: any) => {
    e.preventDefault();
    if (yarn.length<=0) {
      alert("Введите тип изделия");
      return;
    }
 
    if (result && result.length > 0) {
      alert("Такое название уже есть");
      return;
  }


 
const formData = new FormData();
formData.append("name", yarn);


    try {
      dispatch(createYarn(formData));
      alert("Тип изделия создан");
      resetParams();
    } catch (response) {
      console.log(response);
    }
  };
  console.log(yarn)
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
          value={yarn}
          onChange={(e) => setYarn(e.target.value)}
        />
        <button type="submit">Создать </button>
      </form>
    </div>
  );
};
