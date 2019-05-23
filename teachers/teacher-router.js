const router = require("express").Router();

const db = require('./teacher-model')

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This teacher could not be retrieved." })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This teacher could not be retrieved." })
    })
})

router.post('/', (req, res) => {
    const teacherInfo = req.body;

    db.add(teacherInfo)
        .then(teacher => {
            res.status(201).json(teacher)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add teacher." })
        })
})

module.exports = router;