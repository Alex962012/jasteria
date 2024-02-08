import { Link } from "react-router-dom";
import axios from "../../redux/axios";
import { fetchProducts } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchTypes } from "../../redux/slices/types";
import { fetchSeasons } from "../../redux/slices/seasons";
import { fetchYarns } from "../../redux/slices/yarns";

export const ItemManagerUpdate = () => {
  const { products } = useSelector((state: any) => state.products);
  const { types } = useSelector((state: any) => state.types);
  const { seasons } = useSelector((state: any) => state.seasons);
  const { yarns } = useSelector((state: any) => state.yarns);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, product]);

  const inputFileRef = useRef<any>(null);
  const data = products.items;
  const [title, setTitle] = useState("");
  const [homePage, setHomePage] = useState<any>(false);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState<any>("");
  const [season, setSeason] = useState<any>("");
  const [yarn, setYarn] = useState<any>("");
  const [label, setLabel] = useState("");
  // let result: string | any[];
  // let productsData;
  const imgContainer: any = [];
  // if (products.items) {
  //   productsData = products.items;
  //   // result = productsData.filter((i: any) => i.title === title);
  // }

  const handleChange = (event: any) => {
    setProduct(event.target.value);
    let newData;
    if (data) {
      let res = data.find((item: any) => item._id === event.target.value);
      if (res) {
        newData = res;
      }
    }

    setTitle(newData.title);
    setDescription(newData.description);
    setLabel(newData.label);
    setPrice(newData.price);
    setSeason(newData.season);
    setYarn(newData.yarn);
    setType(newData.type);
    setHomePage(newData.homePage);
  };

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchSeasons());
    dispatch(fetchYarns());
    dispatch(fetchProducts());
  }, [dispatch]);
  const typesData = types.items;
  const seasonsData = seasons.items;
  const yarnsData = yarns.items;

  const [imageUrl, setImageUrl] = useState<any>([]);
  const handleChangeFile = async (event: any) => {
    try {
      if (event.target.files.length === 1) {
        setImageUrl([...imageUrl, event.target.files[0]]);
      } else {
        setImageUrl([...imageUrl, ...event.target.files]);
      }
    } catch (e) {
      console.log(event);
    }
  };
  const handleChangeType = (event?: any) => {
    setType(event.target.value);
  };
  const handleChangeSeason = (event?: any) => {
    setSeason(event.target.value);
  };
  const handleChangeYarn = (event?: any) => {
    setYarn(event.target.value);
  };
  const handleChangeHomePage = () => {
    setHomePage(!homePage);
  };
  const resetParams = () => {
    setTitle("");
    setPrice(0);
    setDescription("");
    setType(0);
    setLabel("");
    setSeason(0);
    setYarn(0);
    setImageUrl([]);
    inputFileRef.current.value = null;
  };
  const updateProduct = async (e: any) => {
    e.preventDefault();
    if (!product) {
      alert("Выберите категорию");
      return;
    }
    if (title.length < 1 || !title) {
      alert("Введите название");
      return;
    }
    // if (result && result.length > 0) {
    //   alert("Такое название уже есть");
    //   return;
    // }

    if (imageUrl.length > 1) {
      for (let i = 0; i < imageUrl.length; i++) {
        imgContainer.push(imageUrl[i]);
      }
    }
    if (imageUrl.length === 1) {
      imgContainer.push(imageUrl[0]);
    }
    const formData = new FormData();
    formData.append("title", title);
    if (imageUrl.length > 1) {
      for (let i = 0; i < imageUrl.length; i++) {
        formData.append("imageUrl", imageUrl[i]);
      }
    }
    if (imageUrl.length === 1) {
      formData.append("imageUrl", imageUrl[0]);
    }
    formData.append("description", description);
    formData.append("price", String(price));
    formData.append("type", type);
    formData.append("label", label);
    formData.append("season", season);
    formData.append("yarn", yarn);
    formData.append("homePage", homePage);
    try {
      await axios.put(`/newProducts/update/${product}`, formData);
      alert("Товар изменен");
      resetParams();
    } catch (response) {
      console.log(response);
    }
  };
  return (
    <div>
      <div>
        <h2>Изменение товара</h2>
      </div>
      <div>
        <Link to="/admin">Назад</Link>
      </div>
      <form action="" className="product-form" onSubmit={updateProduct}>
        <label htmlFor="products">Выберите товар для изменения :</label>
        <select id="products" name="products" onChange={handleChange}>
          <>
            {" "}
            <option>Выберите товар</option>
          </>
          {data.map((el: any) => (
            <option value={el._id} label={el.title} key={el._id}>
              {el.title}
            </option>
          ))}
        </select>

        <label htmlFor="title">Введите название товара</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Варежки из мериноса"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Введите описание товара</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Тёплые варежки"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="label">Введите дополнительную информацию</label>
        <input
          type="text"
          id="label"
          name="label"
          placeholder="Подшить подклад"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <label htmlFor="price">Введите цену товара</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <label htmlFor="season">Выберите сезон:</label>
        <select
          id="season"
          name="season"
          onChange={handleChangeSeason}
          value={season}
        >
          <option hidden value="">
            Select An Option
          </option>
          {seasonsData.map((el: any) => (
            <option value={el._id} key={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <label htmlFor="types">Выберите тип изделия:</label>
        <select
          id="types"
          name="types"
          onChange={handleChangeType}
          value={type}
        >
          <option hidden value="">
            Select An Option
          </option>
          {typesData.map((el: any) => (
            <option value={el._id} key={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <label htmlFor="yarns">Выберите пряжу:</label>
        <select
          id="yarns"
          name="yarns"
          onChange={handleChangeYarn}
          value={yarn}
        >
          <option hidden value="">
            Select An Option
          </option>
          {yarnsData.map((el: any) => (
            <option value={el._id} key={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <div>
          <label>Поставить на главную страницу</label>
          <input
            type="checkbox"
            checked={homePage}
            onChange={handleChangeHomePage}
          ></input>
        </div>
        <input
          ref={inputFileRef}
          onChange={handleChangeFile}
          type="file"
          multiple
        />
        <button type="submit">Изменить товар </button>
      </form>
    </div>
  );
};
