const express = require('express');
const mainController = require('../controllers/main')
const router = express.Router();

router.get('/', (req, res, next) => {
    return mainController.main(req, res).then(x => {
        res.json(x)
    })
});

router.post('/', (req, res, next) => {
    return mainController.main(req, res).then(x => {
        res.json(x)
    })
});

router.get('/ping', (req, res, next) => {
    return mainController.ping().then(x => {
        res.json(x)
    })
});

module.exports = router;
