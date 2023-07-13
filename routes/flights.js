var express = require('express');
var router = express.Router();


// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');

const ticketsCtrl = require('../controllers/tickets');

router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);
	
router.get('/:id', flightsCtrl.show);

router.get('/:id/tickets/new', ticketsCtrl.new);

router.post('/:id/tickets', ticketsCtrl.create);

module.exports = router;
