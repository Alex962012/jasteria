
import { Link } from "react-router-dom";
import axios from "../../redux/axios";
import { fetchSeasons } from "../../redux/slices/seasons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const SeasonManagerRemove = () => {
    const { seasons } = useSelector((state:any) => state.seasons);
    const dispatch = useDispatch();
    const [season, setSeason] = useState(null);
    useEffect(() => {
        dispatch(fetchSeasons());
    }, [dispatch, season]);
    const data = seasons.items;
   const deleteSeason=async(e:any)=>{
    e.preventDefault();
    try {
        if (season) {
            await axios.delete(`/season/remove/${season}`);
            alert("Сезон удален");
            setSeason(null);
        } else {
            alert("Выберите сезон для удаления");
        }
    } catch (e) {
        console.log(e);
    }
};
const handleChange = (event:any) => {
    setSeason(event.target.value);
};

  return (
    <div>
      <div>
        <h2>Удаление сезона</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={deleteSeason}>
      <label htmlFor="products" >Выберите сезон для удаления :</label>
                <select 
                    id="products"
                    name="products"
               
                    onChange={handleChange}
                >
                    <>
                        {" "}
                        <option>Выберите сезон</option>
                    </>
                    {data.map((el:any) => (
                        <option value={el._id} key={el._id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <button type="submit" >Удалить товар </button>
      </form>
    </div>
  );
};
