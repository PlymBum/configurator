import PouchDB from "pouchdb";

var db = new PouchDB(process.env.REACT_APP_API_URL+'metaform/', {auth:
        {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD
        }});

let servers=[]

let getAll= ()=> db.allDocs({ include_docs: true, descending: true }, (err, doc) => {

    doc.rows.forEach(e => {
        if(e.doc.model)
            servers.push(e.doc)
        //console.log(e.doc);
    });

}).catch((err) => {
    console.error(err);
})
