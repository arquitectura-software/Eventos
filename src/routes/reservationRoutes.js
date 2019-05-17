const Reservation = require('../models/reservation');
module.exports = function(app){
    app.get('/reservations',(req,res)=>{
        Reservation.getReservations((err, data)=>{
            res.status(200).json(data);
        });
    });
    app.post('/reservations',(req,res)=>{
        const reservData = {
            id: null,
            quantity: req.body.quantity,
            id_user: req.body.id_user,
            id_event: req.body.id_event,
            created_at: null,
            updated_at:null
        };
        Reservation.insertReservation (reservData,(err,data)=>{
            if (data && data.insertId){
                res.json({
                    success: true,
                    data: data
                })
            }else{
                res.status(500).json({
                    success: false,
                    data: 'Error'
                })
            }
        })
    });

    app.put('/reservations/:id',(req,res)=>{
        const reservData = {
            id: parseInt(req.params.id),
            quantity: req.body.quantity,
            id_user: req.body.id_user,
            id_event: req.body.id_event,
            created_at: null,
            updated_at:null
        };
        console.log(reservData)
        Reservation.updateReservation(reservData,(err,data)=>{
            if (data && data.message){
                res.json(data)
            }else{
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
    });


}