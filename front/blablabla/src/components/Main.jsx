import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";

import styles from "../styles/Main.module.css";

const FIELDS = {
    username: "username",
    room: "room",
};

const Main = () => {
    const { username, room } = FIELDS;
    console.log({ username, room });

    const [values, setValues] = useState({ [username]: "", [room]: "" });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    }

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((v) => !v);
        if (isDisabled) {
            e.preventDefault();
        }
    };

    console.log(values);
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>BlaBlaBla</h1>
                <form className={styles.form}>
                    <div className={styles.group}>
                        <input
                            type="text"
                            name="username"
                            value={values[username]}
                            placeholder='Username'
                            className={styles.input}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <input
                            type="text"
                            name="room"
                            value={values[room]}
                            placeholder='Room'
                            className={styles.input}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <Link
                        className={styles.group}
                        onClick={handleClick}
                        to={`/chat?name=${values[username]}&room=${values[room]}`}>
                        <button type='submit' className='button'>
                            Sign In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Main