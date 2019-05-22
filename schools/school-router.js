const router = require("express").Router();

const db = require('../schools/school-model')

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This school could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This school could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const schoolInfo = req.body;

    db.add(schoolInfo)
        .then(school => {
            res.status(201).json(school)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add school" })
        })
})

module.exports = router;