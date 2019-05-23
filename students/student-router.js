const router = require('express').Router();

const db = require('./student-model');

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This student could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This student could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const { name, age, grade, backgroundStory, insuranceCard, birthCertificate, representative,contactInfo } = req.body;

    !name
    , !age, !grade, !backgroundStory, !insuranceCard, !birthCertificate, !representative, !contactInfo
    ?
        res.status(400).json({ errorMessage: "Please provide  a name for this student." })
    :
        db.add(studentInfo)
        .then(stu => {
            res.status(201).json(stu);
        })
        .catch( err => {
            res.status(500)({ error: "There was an error while saving this student to the database." })
    })
})


module.exports = router;