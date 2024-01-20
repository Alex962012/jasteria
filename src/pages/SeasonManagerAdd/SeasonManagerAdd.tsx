import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {createSeason,fetchSeasons } from "../../redux/slices/seasons";
import { Link } from "react-router-dom";
import "./SeasonManagerAdd.css";
export const SeasonManagerAdd = () => {


  const  {seasons}  = useSelector((state:any) => state.seasons);
  const dispatch = useDispatch();
  const [season,setSeason] = useState<any>('');

  let result: string | any[];
  let  seasonsData;

  if (seasons.items) {
    seasonsData =  seasons.items;
    result =  seasonsData.filter((i:any) => i.name.toLowerCase() ===   season.toLowerCase());
}
  console.log(seasons)
  useEffect(() => {
    dispatch(fetchSeasons());
  }, [dispatch]);



  const resetParams = () => {
    setSeason("");

  };
  const addProduct = async (e: any) => {
    e.preventDefault();
    if (season.length<=0) {
      alert("Введите сезон");
      return;
    }
 
    if (result && result.length > 0) {
      alert("Такое название уже есть");
      return;
  }


 
const formData = new FormData();
formData.append("name", season);


    try {
      dispatch(createSeason(formData));
      alert("Сезон создан");
      resetParams();
    } catch (response) {
      console.log(response);
    }
  };
  console.log(season)
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
          name="season"
          placeholder="Весна"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        />
        <button type="submit">Создать </button>
      </form>
    </div>
  );
};
