import { useDispatch, useSelector } from "react-redux";

import { fetchAuth } from "../../redux/slices/auth";
import { useState } from "react";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Auth = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isAuth = useSelector(selectIsAuth);
    const handlerSubmit = async (event:any) => {
        event.preventDefault();
        dispatch(fetchAuth({ email, password }));
    };

    if (isAuth) {
        return <Navigate to="/admin" />;
    }

    return (
        <div className={'styles.authContainer'}>
            <div className={'styles.contentContainer'}>
                <h1>Вход в аккаунт</h1>
                <form onSubmit={handlerSubmit} className={'styles.form'}>
                    <div className={'styles.value'}>
                        <label className={'styles.label'}>Введите email </label>
                        <input
                            name="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={'styles.value'}>
                        <label className={'styles.label'}>Введите пароль</label>
                        <input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Вход</button>
                </form>
            </div>
        </div>
    );
};