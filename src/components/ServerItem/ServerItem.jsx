import React from 'react';
import styles from "./ServerItem.module.css";
import {useRoutes} from "react-router-dom";



const ServerItem  = (props) => {
    return (
        <div className={styles.server_cart} onClick={props.callback}>
            <div>
                <h5>{props.name}</h5>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ServerItem;