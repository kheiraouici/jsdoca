var express = require('express');
var router = express.Router();

const service = require('../services/users');

const private = require('../middlewares/private');

router.get('/:id',private.checkJWT, service.getById);

router.post('/', private.checkJWT, service.add);

router.patch('/:id', private.checkJWT, service.update);

router.delete('/:id', private.checkJWT, service.delete);

router.post('/authenticate',private.checkJWT, service.authenticate);

module.exports = router;