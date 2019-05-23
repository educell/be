const router = require("express").Router();

const db = require('./admin-model')

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This admin could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "This admin could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const adminInfo = req.body;

    db.add(adminInfo)
        .then(admin => {
            res.status(201).json(admin)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add admin" })
        })
})

module.exports = router;