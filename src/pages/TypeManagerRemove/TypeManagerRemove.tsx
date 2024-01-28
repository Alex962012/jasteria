
import { Link } from "react-router-dom";
import axios from "../../redux/axios";
import { fetchTypes} from "../../redux/slices/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const TypeManagerRemove = () => {
    const { types } = useSelector((state:any) => state.types);
    const dispatch = useDispatch();
    const [type, setType] = useState(null);
    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch, type]);
    const data = types.items;
   const deleteType=async(e:any)=>{
    e.preventDefault();
    try {
        if (type) {
            await axios.delete(`/type/remove/${type}`);
            alert("Тип удален");
            setType(null);
        } else {
            alert("Выберите тип для удаления");
        }
    } catch (e) {
        console.log(e);
    }
};
const handleChange = (event:any) => {
    setType(event.target.value);
};

  return (
    <div>
      <div>
        <h2>Удаление типа</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={deleteType}>
      <label htmlFor="products" >Выберите тип для удаления :</label>
                <select 
                    id="products"
                    name="products"
               
                    onChange={handleChange}
                >
                    <>
                        {" "}
                        <option>Выберите тип</option>
                    </>
                    {data.map((el:any) => (
                        <option value={el._id} key={el._id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <button type="submit" >Удалить тип </button>
      </form>
    </div>
  );
};
