import React,{useState} from "react"
import classes from "./MyInput.module.css"
import PouchDB from "pouchdb"


const MyInput=()=>{

    const [conf,setText]= useState({
        _id: "",
        cpu: "",
        ram: "",
        hdd: "",
        base: ""
})
    
    function genId() {
        var length = 12,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setText(prevState=>({
            ...prevState,
            _id: retVal
        }))
        //return retVal;
    }



    const sendConf=()=>{
        genId();
        console.log(genId())
        console.log(conf);
        db.put(conf);
        setText(prevState=>({
            ...prevState,
            cpu: "",
            ram: "",
            hdd: "",
            base: ""
        }))
        console.log(conf);
        
    }

    var db = new PouchDB('https://db.na0.ru/test/', {auth: {username:'netadmin', password: '3brd4ZDG'}});
    let temp={...db.get(1)}
    console.log(temp)

    return (
        <div>
        <h1>Poogle</h1>
        
        <input className={classes.input} placeholder='cpu' value={conf.cpu} 
        onChange={event=>setText(prevState => (
            {...prevState,
            cpu: event.target.value}
            ))}/>
         <input className={classes.input} placeholder='ram' value={conf.ram} onChange={event=>setText(prevState => (
            {...prevState,
            ram: event.target.value}
            ))}/>
        <input className={classes.input} placeholder='hdd' value={conf.hdd} onChange={event=>setText(prevState => (
            {...prevState,
            hdd: event.target.value}
            ))}/>
        <input className={classes.input} placeholder='base' value={conf.base} onChange={event=>setText(prevState => (
            {...prevState,
            base: event.target.value}
            ))}/>
        <button className={classes.btn} onClick={sendConf}>отправить</button>
        
        </div>
    )
}

export default MyInput;