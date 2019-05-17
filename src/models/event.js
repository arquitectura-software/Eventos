const mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Events'
});

let eventModel = {};
eventModel.getEvents = (callback) =>{
    if (connection){
        connection.query(
            'SELECT * FROM events ORDER BY id',
            (err, rows) =>{
                if (err){
                    throw err
                }else{
                    callback(null,rows)
                }
            }
        )
    }
}

eventModel.insertEvent = (eventData,callback)=>{
    if (connection){
        connection.query(
            'INSERT INTO events SET ?',eventData,
            (err, result) =>{
                if (err){
                    throw err
                }else{
                    callback(null,{
                        'insertId': result.insertId
                    })
                }
            }
        )
    }
}

eventModel.updateEvent = (eventData,callback)=>{
    if (connection){
        const sql = "UPDATE events SET name = ${connection.escape(eventData.name)},location = ${connection.escape(eventData.location),date = ${connection.escape(eventData.date)}, capacity= ${connection.escape(eventData.capacity)}, audence= ${connection.escape(eventData.audence)}, description = ${connection.escape(eventData.description)} WHERE id = ${connection.escape(eventData.id)}";
        
        connection.query(sql, (err, result) => {
            if (err){
                throw err
            }else{
                callback(null,{
                    "message": "success"
                })
            }
        })
    };
}

module.exports = eventModel;