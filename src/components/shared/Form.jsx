import React, { Fragment, useEffect, useState } from "react";

// Icons
import { A } from "hookrouter";
import validate from '../../middleware/Validate';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { checkUser } from '../../hooks/LocalStorage';

const Form = ({ isLogin }) => {

    const [showPassword, setPassword] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            if(Object.keys(values).length > 0) handleUser();
        }
    }, [errors])

    const handleUser = () => checkUser(values, isLogin)  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values, isLogin));
    };

    const handleChange = (e) => {
        e.persist();
        (e.target.name === "remember") ?
            setValues(values => ({ ...values, "remember": !e.target.value })) :
            setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    const RegisterInputs = (<Fragment>
        <div className="form__col  form__col--sm">
            <input name="name" autoComplete="off" placeholder="Name" className={`input ${errors.name && 'is-danger'}`} type="text" value={values.name || ''} onChange={handleChange} />
            {errors.name && <span className="form__error">{errors.name}</span>}
        </div>
        <div className="form__col  form__col--sm">
            <input type="text"  autoComplete="off" className={`input ${errors.surname && 'is-danger'}`} name="surname" placeholder="Surname" value={values.surname || ''} onChange={handleChange} />
            {errors.surname && <span className="form__error">{errors.surname}</span>}
        </div>
    </Fragment>)

    const Remember = (<Fragment>
        <div className="form__col form__col--bg form__col--flex">
            <div className="form__col--flex">
                <input
                    id="rmb"
                    type="checkbox"
                    value={values.remember || ''}
                    onChange={handleChange}
                    name="remember"
                />
                <label className="form__link u-margin-left-small" htmlFor="rmb">Remember</label>
            </div>
            <A className="form__link" href="/">Help?</A>
        </div>

    </Fragment>)

    return (
        <form className="form u-margin-top-small" onSubmit={handleSubmit}>

            {!isLogin && RegisterInputs}

            <div className="form__col  form__col--bg">
                <input autoComplete="off" name="email" placeholder="Email" className={`input ${errors.email && 'is-danger'}`} type="email" value={values.email || ''} onChange={handleChange} />
                {errors.email && <span className="form__error">{errors.email}</span>}
            </div>
            <div className="form__col  form__col--bg">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    value={values.password || ''}
                    className={`input ${errors.password && 'is-danger'}`}
                    onChange={handleChange}
                    
                />
                {showPassword ?
                    <FaEyeSlash onClick={() => setPassword(!showPassword)} className="input__icon toggle-password" />
                    :
                    <FaEye onClick={() => setPassword(!showPassword)} className="input__icon toggle-password" />}

                {errors.password && <span className="form__error">{errors.password}</span>}
            </div>
            {isLogin && Remember}

            <div className="form__col--sm">
                <input
                    type="submit"
                    className="btn btn--blue"
                    value={isLogin ? "Logn in" : "Create account"}
                />
            </div>

            <div className="form__col--sm">
                <A
                    className="form__redirect"
                    href={isLogin ? "/auth/register" : "/auth/login"}>
                    <input
                        type="submit"
                        className="btn btn--transparent"
                        value={isLogin ? "Create account" : "Logn in"}
                    />
                </A>
            </div>
        </form>
    );
};

export default Form;






