const router = require("express").Router();

const db = require('./worker-model')

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This social worker could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This social worker could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const workerInfo = req.body;

    db.add(workerInfo)
        .then(worker => {
            res.status(201).json(worker)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add social worker" })
        })
})

router.get('/:id/students', (req, res) => {
    const id = req.params.id;
    db.getStudents(id)
    .then(workerId => {
        if(workerId === 0) {
            res.status(404).json({ message: "Unable to find." })
        } else {
            res.status(200).json(workerId)
        }
    })
    .catch(err => {
        res.status(500).json({ err: "The students could not be retrieved." })
    })
})

module.exports = router;