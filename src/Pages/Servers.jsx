import React, {useEffect, useState} from 'react';
import ServerItem from "../components/ServerItem/ServerItem";
import styles from './servers.module.css'
import PouchDB from "pouchdb";
import {useNavigate, useParams} from "react-router-dom";

PouchDB.plugin(require('pouchdb-find').default);
//PouchDB.plugin(require('pouchdb-find'));


const Servers = () => {

    let navigate = useNavigate();



    var db = new PouchDB(process.env.REACT_APP_API_URL + 'metaform/', {
        auth:
            {
                username: process.env.REACT_APP_API_USERNAME,
                password: process.env.REACT_APP_API_PASSWORD
            }
    });

    const [allServers, setServers] = useState([])

    const getModels = () => db.find({
        selector: {
            name: {$exists: true}
        },
        fields: ['name', '_id','image_url'],
        limit: 10
    }, (err, result) => {
        if (err) {
            return console.log(err)
        }
        setServers((prev)=>[...prev,...result.docs])

    })


    useEffect(() => {
        getModels()
        //console.log("useEffect")
    }, [])


    console.log(allServers)
    //allServers.map(el=>console.log(el))


    return (
        <div className={styles.content}>

            {allServers.map(el =>
                <ServerItem key={el._id} name={el.name} img={el.image_url}
                            callback={()=>navigate('/servers/'+el._id)}
                />)}
        </div>
    );
}

export default Servers;