const express = require('express');
const router = express.Router();


//routes
router.get('/', (req, res)=>{
    res.json({mssg: 'Getting all workouts...'});
});

router.get('/:id', (req, res)=>{
    res.json({mssg: 'Getting individual workout...'});
});

router.post('/', (req, res)=>{
    res.json({mssg: 'Posting new workout...'});
});
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'Deleting workout...'});
});
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'Updating workouts...'});
});

module.exports = router;