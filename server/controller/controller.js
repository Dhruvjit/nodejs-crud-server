let Userdb = require('../model/model');

// create new question
exports.create = (req, res) => {

    console.log(req.body);

    // if content is empty don't proceed
    if(Object.keys(req.body).length == 0){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    // new question
    const quiz = new Userdb({
        pregunta: req.body.pregunta,
        respuestas: req.body.respuestas,
        correcta: req.body.correcta,
    })

    // save quiz to database
    quiz.save(quiz).then(data => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send(
            {message: err.message || "Some error occured while creating a create operation"}
        )
    })
}

// retrieve and return all questions
exports.find = (req, res) => {
    // find and return all the entries of DB
    Userdb.find().then(question => {
        res.status(200).send(question);
    }).catch(err => {
        res.status(500).send(
            {message: err.message || "Error occured while retrieving quiz"}
        )
    })
}

// get single question by id
exports.findOne = (req,res) => {
    const id = req.params.id;
    Userdb.findOne(id).then(question => {
        if(!question){
            res.status(404).send({message: `Cannot find the question with id ${id}`});
            return;
        }else{
            res.status(200).send(question);
        }
    }).catch(err => {
        res.status(500).send(
            {message: err.message || "Error occured while retrieving quiz"}
        )
    })
}

// udate the existing question by question id
exports.update = (req, res) => {
    if(!req.body){
        console.log(req.body)
        res.status(400).send({message: "Content to update cannot be empty"});
        return;
    }

    // get id value passed in url
    const id = req.params.id;

    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(question => {
        if(!question){
            res.status(404).send({message: `Cannot update question with id ${id}, question not found!`});
            return;
        }else{
            res.status(200).send(question);
        }
    }).catch(err => {
        res.status(500).send(
            {message: err.message || "Error in updating question for quiz"}
        )
    })

}

// delete the question by question id
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id).then(question => {
        if(!question){
            res.status(404).send({message: `Cannot delete question with id ${id}, is is found!`});
            return;
        }else{
            res.status(200).send({message: 'Question was deleted successfully!'});
        }

    }).catch(err => {
        res.status(500).send(
            {message: err.message || "Could not delete user with ID=" + id}
        )
    });
}