import { useEffect, useState } from "react";

const URI: string = "https://jasteria-alex962012.amvera.io/newProducts/add";
const createNewProduct = async (product: any) => {
  try {
    const request = async () => {
      const res = await fetch(`${URI}`, {
        method: "POST",
        mode: "cors",

        credentials: "same-origin",
        body: product,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });
      console.log(res);
      console.log(product);
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data);
      }
    };
    if (product) {
      request();
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const ItemManager = () => {
  const [formState, setFormState] = useState({
    imageUrl: "",
    title: "",
    price: "",
    season: "",
    images: [""],
    description: "",
    typeYarn: "",
    typeName: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();

    createNewProduct(formState);
    setFormState({
      imageUrl: "",
      title: "",
      price: "",
      season: "",
      images: [""],
      description: "",
      typeYarn: "",
      typeName: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={formState.title}
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
          />
          <label htmlFor="">Название товара</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.price}
            onChange={(e) => {
              setFormState({ ...formState, price: e.target.value });
            }}
          />
          <label htmlFor="">Цена товара</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.imageUrl}
            onChange={(e) => {
              setFormState({ ...formState, imageUrl: e.target.value });
            }}
          />
          <label htmlFor="">Ссылка на основную картинку</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.images}
            onChange={(e) => {
              setFormState({ ...formState, images: [e.target.value] });
            }}
          />
          <label htmlFor="">Ссылка на доп картинки</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.description}
            onChange={(e) => {
              setFormState({ ...formState, description: e.target.value });
            }}
          />
          <label htmlFor="">Описание</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.season}
            onChange={(e) => {
              setFormState({ ...formState, season: e.target.value });
            }}
          />
          <label htmlFor="">Сезон</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.typeName}
            onChange={(e) => {
              setFormState({ ...formState, typeName: e.target.value });
            }}
          />
          <label htmlFor="">Тип товара</label>
        </div>
        <div>
          <input
            type="text"
            value={formState.typeYarn}
            onChange={(e) => {
              setFormState({ ...formState, typeYarn: e.target.value });
            }}
          />
          <label htmlFor="">Тип пряжи</label>
        </div>
        <button>Добавить товар</button>
      </form>
    </div>
  );
};
