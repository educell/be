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
    const studentInfo = req.body;

    db.add(studentInfo)
        .then(student => {
            res.status(201).json(student)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add student." })
        })
})

router.delete('/:id', (req, res) => {
    const stuID = req.params.id;
    db.remove(stuID)
    .then(id => {
        if(id.length === 0){
            res.status(404).json({ message: "A student with this ID does not exist." })
        } else {
            res.status(200).json({ message: "This student was deleted successfully." })
        }
        
    })
    .catch(err => {
        res.status(500).json({ error: "This student could not be deleted." })
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    db.update(id, changes)
    .then(id => {
        if (id === 0) {
            res.status(404).json({ message: "A student with the specified ID does not exist." }) 
        } 
        db
            .findById(id)
            .then(changes => {
                res.status(200).json({ message: "This student was successfully updated." })
            })
            
    })
    .catch(err => {
        res.status(500).json({ error: "This student's information could not be modified." })
    })
})

module.exports = router;