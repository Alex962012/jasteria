import { useForm } from "react-hook-form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../redux/axios";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
const fetchAuth: any = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);
export const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      passwordHash: "",
    },
    mode: "onChange",
  });
  const onSubmit = (values: any) => {
    dispatch(fetchAuth(values));
  };
  if (isAuth) {
    return <Navigate to="/admin" />;
  }
  console.log(isAuth);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Логин"
            type="email "
            {...register("email", { required: "укажите почту" })}
          />
          <input
            type="text"
            placeholder="Пароль"
            {...register("passwordHash", { required: "укажите пароль" })}
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};
