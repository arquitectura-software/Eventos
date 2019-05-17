const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Events'
});

let reservationModel = {};
reservationModel.getReservations= (callback) =>{
    if (connection){
        connection.query(
            'SELECT * FROM reservations ORDER BY id',
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

reservationModel.insertReservation = (reservData,callback)=>{
    if (connection){
        connection.query(
            'INSERT INTO reservations SET ?',reservData,
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

reservationModel.updateReservation = (reservData,callback)=>{
    if (connection){
        const sql = "UPDATE reservations SET name = ${connection.escape(eventData.name)},location = ${connection.escape(eventData.location),date = ${connection.escape(eventData.date)}, capacity= ${connection.escape(eventData.capacity)}, audence= ${connection.escape(eventData.audence)}, description = ${connection.escape(eventData.description)} WHERE id = ${connection.escape(eventData.id)}";
        
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

module.exports = reservationModel;