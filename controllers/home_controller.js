const ToDo = require('../models/ToDo');

module.exports.createTask = function (req, res) {
    ToDo.create({
        date: req.body.date,
        description: req.body.description,
        category: req.body.category
    }, function (error, toDos) {
        if (error) {
            console.log(`Error in creating ToDO Tasks ${error}`)
            return;
        }
        // console.log(toDos)
        return res.redirect('back')
    })
}

module.exports.find = function (req, res) {
    ToDo.find({}, function (err, toDos) {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        return res.render('home', {
            title: 'ToDO App',
            toDo: toDos
        })
    })
}

module.exports.delete = function (req, res) {

    console.log("DEeindsp");
    console.log(req.body.check);
    const id=req.body.check;
    ToDo.findOneAndRemove({id}).then(()=>{
          return res.redirect('back')
    })
   
}
module.exports.temp = function (req, res) {

    // let id = req.body.check
    console.log("Inside temp");
}


