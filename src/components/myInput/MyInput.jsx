import React,{useState,useEffect} from "react"
import classes from "./MyInput.module.css"
import PouchDB from "pouchdb"
import { v4 as uuidv4 } from 'uuid';


const MyInput=()=>{

    const [conf,setConf]= useState({

        cpu: "",
        ram: "",
        hdd: "",
        base: ""
})


    useEffect (()=>{

    },[conf._id])
    var db = new PouchDB(process.env.REACT_APP_API_URL+'test/', {auth:
            {
                username: process.env.REACT_APP_API_USERNAME,
                password: process.env.REACT_APP_API_PASSWORD
            }});

    const sendConf=()=>{

        //db.put({ _id : uuidv4(),...conf});
        console.log({ _id : uuidv4(),...conf} )
        setConf(prevState=>({
            ...prevState,
            cpu: "",
            ram: "",
            hdd: "",
            base: ""
        }))
    }




    let temp=db.get('z8uJYIQA2FQs', )

    temp.then((value)=>console.log(value._id)) // пулучить поле


    return (
        <div>
        <h1>Poogle</h1>
        
        <input className={classes.input} placeholder='cpu'
               value={conf.cpu}
                onChange={event=>setConf(prevState => (
                    {...prevState, cpu: event.target.value}
            ))}/>
         <input className={classes.input} placeholder='ram'
                value={conf.ram}
                onChange={event=>setConf(prevState => (
                    {...prevState, ram: event.target.value}
            ))}/>
        <input className={classes.input} placeholder='hdd'
               value={conf.hdd}
               onChange={event=>setConf(prevState => (
                    {...prevState, hdd: event.target.value}
            ))}/>
        <input className={classes.input} placeholder='base'
               value={conf.base}
               onChange={event=>setConf(prevState => (
            {...prevState,
            base: event.target.value}
            ))}/>
        <button className={classes.btn} onClick={sendConf}>отправить</button>

        </div>
    )
}

export default MyInput;