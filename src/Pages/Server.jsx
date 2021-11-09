import React, {useEffect, useState} from 'react';
import PouchDB from "pouchdb";
import {useParams} from "react-router-dom";

function Server() {

    const [server, setServer] = useState([])
    let params = useParams();

    console.log(params._id)

    var db = new PouchDB(process.env.REACT_APP_API_URL + 'metaform/', {
        auth:
            {
                username: process.env.REACT_APP_API_USERNAME,
                password: process.env.REACT_APP_API_PASSWORD
            }
    });
    //
    // const getServer =  () => db.find({
    //     selector: {
    //         _id: params._id
    //     },
    //     fields: ['name', '_id', 'image_url']
    // },  (err, result) => {
    //     if (err) {
    //         return console.log(err)
    //     }
         //console.log(result.docs)
        //  setServer(result.docs)
        // console.log(server)
        //setServer((prev)=>result.docs.map(e=>prev.push(e)))
        //return result.toString()
  //  })

    // async function  getServer() {
    //     try {
    //         var result = await db.find({
    //             selector: {_id: params._id},
    //             fields: ['name', '_id', 'image_url']
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     return result
    // }

    // async function  getServer() {
    //     db.find({
    //         selector: {_id: params._id},
    //         fields: ['name', '_id', 'image_url']
    //     }).then(function (result) {
    //         //console.log(result)
    //         //return result
    //
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    // }

    // useEffect(()=>{
    //     getServer()
    // },[])


    // const getServer=()=>db.get(params._id, function(err, doc) {
    //     if (err) { return console.log(err); }
    //
    // });
const getServer=()=>{db.get(params._id, function(err, doc) {
    if (err) { return console.log(err); }
    return doc
})};

let item=getServer()

    //item.then(res=>res.map(e=>e))
    // const getParam=(server)=>{
    //
    //     return server.then(JSON.parse(result))
    // }
    //
    // const id=getParam(item)
    console.log(item)


    return (
        <div>
            server
           {/*<h1>*/}
           {/*    {item.docs[0]._id}*/}
           {/*</h1>*/}
           {/* <h1>*/}
           {/*     {item.docs[0].name}*/}
           {/* </h1>*/}
           {/* <img src={item.docs[0].image_url} alt="logo"/>*/}
        </div>
);
}

export default Server;