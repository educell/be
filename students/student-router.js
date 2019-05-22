const router = require('express').Router();

const Students = require('./student-model');

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
        if(students){
            res.status(200).json(students);
        } else {
            res.status(404).json({ message: 'The students could not be found.' })
        }
      
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving this student.' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'We could not find this student.' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving this student' });
  }
});

// router.post('/', async (req, res) => {
//   const student = req.body;

//   if (track.name) {
//     try {
//       const inserted = await Students.add(track);
//       res.status(201).json(inserted);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: 'We ran into an error creating the track' });
//     }
//   } else {
//     res.status(400).json({ message: 'Please provide name of the track' });
//   }
// });

router.post('/', (req, res) => {
    if(!req.body.name, !req.body.age, !req.body.grade, !req.body.backbroundStory, !req.body.insuraceCard, !req.body.birthCertificate, !req.body.representative, !req.body.contactInfo) {
        res.status(400).json({ message: 'Oops! Look\'s like you missed a field.' })
    } else {
        db('students')
         .insert(req.body, 'id')
         .then(ids => {
          db('students')
            .where({ id: ids[0] })
            .first()
            .then(student => {
              res.status(200).json(student);
            })
            .catch(err => {
              res.status(500).json(err);
            });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Students.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'This student does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating this student\'s record' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide all required information.',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Students.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'This student does not exist.',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing this student' });
  }
});

module.exports = router;