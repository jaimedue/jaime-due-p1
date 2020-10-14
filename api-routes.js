//initialize express router
const router = require('express').Router();
//import contact controller
const contactController = require('./contactController');

//set default api response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome'
    });
});

//contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;

