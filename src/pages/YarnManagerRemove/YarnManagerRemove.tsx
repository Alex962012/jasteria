
import { Link } from "react-router-dom";
import axios from "../../redux/axios";
import { fetchYarns} from "../../redux/slices/yarns";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const YarnManagerRemove = () => {
    const { yarns} = useSelector((state:any) => state.yarns);
    const dispatch = useDispatch();
    const [yarn, setYarn] = useState(null);
    useEffect(() => {
        dispatch(fetchYarns());
    }, [dispatch, yarn]);
    const data = yarns.items;
   const deleteYarn=async(e:any)=>{
    e.preventDefault();
    try {
        if (yarn) {
            await axios.delete(`/yarn/remove/${yarn}`);
            alert("Пряжа удалена");
            setYarn(null);
        } else {
            alert("Выберите тип для удаления");
        }
    } catch (e) {
        console.log(e);
    }
};
const handleChange = (event:any) => {
    setYarn(event.target.value);
};

  return (
    <div>
      <div>
        <h2>Удаление пряжи</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={deleteYarn}>
      <label htmlFor="products" >Выберите пряжу для удаления :</label>
                <select 
                    id="products"
                    name="products"
               
                    onChange={handleChange}
                >
                    <>
                        {" "}
                        <option>Выберите пряжу</option>
                    </>
                    {data.map((el:any) => (
                        <option value={el._id} key={el._id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <button type="submit" >Удалить пряжу </button>
      </form>
    </div>
  );
};
