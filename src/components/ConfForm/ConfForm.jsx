import React from "react"
import Form from "@rjsf/core";
import PouchDB from "pouchdb"


const ConfForm = ()=>{

    var db = new PouchDB ('https://db.na0.ru/test/',{ auth : {username: 'netadmin',password: '3brd4ZDG'}});
    db.get(1)
return (
        <div>
      
      
        </div>
    )

}


export default ConfForm;