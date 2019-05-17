const Event = require('../models/event');
module.exports = function(app){
    app.get('/events',(req,res)=>{
        Event.getEvents((err, data)=>{
            res.status(200).json(data);
        });
    });
    app.post('/events',(req,res)=>{
        const eventData = {
            id: null,
            name: req.body.name,
            location: req.body.location ,
            date: req.body.date ,
            capacity: req.body.capacity,
            audence: req.body.audence,
            description: req.body.description,
            created_at: null,
            updated_at:null
        };
        Event.insertEvent (eventData,(err,data)=>{
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

    app.put('/events/:id',(req,res)=>{
        const eventData = {
            id: req.params.id,
            name: req.body.name,
            location: req.body.location ,
            date: req.body.date ,
            capacity: req.body.capacity,
            audence: req.body.audence,
            description: req.body.description,
            created_at: null,
            updated_at:null
        };
        Event.updateEvent(eventData,(err,data)=>{
            if (data && data.insertId){
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
