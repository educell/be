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
    .then(schoolId => {
        if(schoolId === 0) {
            res.status(404).json({ message: "Unable to find." })
        } else {
            res.status(200).json(schoolId)
        }
    })
    .catch(err => {
        res.status(500).json({ err: "The administrators could not be retrieved." })
    })
})


router.delete('/:id', (req, res) => {
    const schoolID = req.params.id;
    db.remove(schoolID)
    .then(id => {
        if(id.length === 0){
            res.status(404).json({ message: "A school with this ID does not exist." })
        } else {
            res.status(200).json({ message: "This school was deleted successfully." })
        }
        
    })
    .catch(err => {
        res.status(500).json({ error: "The school could not be deleted." })
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    db.update(id, changes)
    .then(id => {
        if (id === 0) {
            res.status(404).json({ message: "A school with the specified ID does not exist." }) 
        } 
        db
            .findById(id)
            .then(changes => {
                res.status(200).json(changes)
            })
            
    })
    .catch(err => {
        res.status(500).json({ error: "This schools's information could not be modified." })
    })
})


module.exports = router;