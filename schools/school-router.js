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

router.get('/:id/admin', (req, res) => {
    const id = req.params.id;
    db.getAdmins(id)
    .then(school => {
        if(school === 0) {
            res.status(404).json({ message: "Unable to find." })
        } else {
            res.status(200).json(db)
        }
    })
    .catch(err => {
        res.status(500).json({ err: "The administrators could not be retrieved." })
    })
})

module.exports = router;