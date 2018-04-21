var express = require('express');
var router = express.Router();
//
///* GET users listing. */
//router.post('/', function(req, res, next) {
//  res.send('respond with a resource');
//});


//Require controller
var carte_controller = require('../controllers/carteController');
var menu_controller = require('../controllers/menuController');

/// cartes ROUTES///
 
//:) page après connection réussie  CHECK
router.get('/cartes', carte_controller.index);

//:) 
router.get('/cartes/add', carte_controller.create_carte);

//ok
router.get('/cartes/:id/remove', carte_controller.carte_remove_get);
 
//ok
router.get('/cartes/:id/get', carte_controller.carte_id_get);

//:)
router.get('/cartes/get', carte_controller.carte_list_get);

//------------------------------------------------------------------------------
/// Cartes/ menus ROUTES///
 
//router.get('/', menu_controller.index);

//OK  BIG VUE /cartes/menus/get > retourne tous les menus et toutes les cartes
router.get('/cartes/menus/get', menu_controller.cartes_menus_list);

//OK affiche tous les menus de la carte selected
router.get('cartes/:id/menus/get', menu_controller.carte_menus_get);

//OK supprimer tous les menus
router.get('cartes/:id/menus/remove', menu_controller.menu_remove_all_get);


//------------------------------------------------------------------------------
//Menus ROUTES//

// /cartes/ :id/menus/get > retourne tous les menus de la carte sélectionnée

//ajoute menu à la carte et retourne ID 
router.get('/cartes/:id/menus/add', menu_controller.menu_add_get);

router.get('/cartes/menus/:id/get', menu_controller.menu_get);

router.get('/cartes/menus/:id/remove', menu_controller.menu_remove_get);
 
router.get('/cartes/menus/:id/update', menu_controller.menu_update_get);
 
//------------------------------------------------------------------------------
////Extras// ok
//
//router.get('/cartes/:id/menus/asc',menu_controller.menu_price_up);
//
//router.get('/cartes/:id/menus/desc',menu_controller.menu_price_down);
//
//router.get('/cartes/:id/asc', carte_controller.carte_price_up);
//
//router.get('/cartes/:id/desc', carte_controller.carte_price_down);

module.exports = router ;