const router = require('express').Router();

const data = [
    { id: 1, name: 'Bharat here hello' },
    { id: 2, name: 'Item 2 from Service' },
    { id: 3, name: 'Item 3 from Service' }
];

router.get('/data', (req, res) => {
    res.json(data);
})

router.get('/', (req,res) => {
    res.send(`Microservice is running successfully`)
})

module.exports = router;
