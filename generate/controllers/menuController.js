
//ici toutes les FONCTIONS pour gérer les MENUS
var dataMenus = require('../models/menuModel');
//ici toutes les FONCTIONS pour gérer les cartes


var listeDeMenus = [];

exports.create_menu = function (req, res) {
    menu = {
        id: 0,
        nom: "",
        entree: {
            nom: "",
            prix: 0.00
        },
        plat: {
            nom: "",
            prix: 0.00
        },
        dessert: {
            nom: "",
            prix: 0.00
        }
    };
};

/*exports. xxx = function (req, res){
 res.send ('xxx');
 }
 */
//var menu_Model = require('../models/menuModel');

//vue de tous les menus et cartes ( carteModel )
exports.cartes_menus_list = function (req, res) {
    res.send('Big vue');
};

///afficher tous les menus de la carte selected
exports.carte_menus_get = function (req, res) {
    res.send('carte menus get');
};

//------------------------------------------------------------------------------
//afficher le menu selected -> renvoi au tableau menu (menuModel) 
exports.menu_get = function (req, res) {
    res.send('menu get:' + req.params.id);
};

//------------------------------------------------------------------------------
//ajoute un nouveau menu à la carte > 
exports.menu_add_get = function (req, res) {
    res.send('menu add GET');
};

exports.menu_add_post = function (req, res) {
    res.send('menu add POST');
};
//-----------------------------------------------------

//supprimer le menu selected
exports.menu_remove_get = function (req, res) {
    res.send('menu remove GET');
};

exports.menu_remove_post = function (req, res) {
    res.send('menu remove POST');
};

//---------------------------------------------------------
//supprimer tous les menus 
exports.menu_remove_all_get = function (req, res) {
    res.send('menu remove all GET');
};

exports.menu_remove_post = function (req, res) {
    res.send('menu remove POST');
};
//---------------------------------------------------------

//mettre à jour le menu selected

exports.menu_update_get = function (req, res) {
    res.send('menu update GET');
};

exports.menu_update_post = function (req, res) {
    res.send('menu update POST');
};


//------------------------------------------------------------------------------
//EXTRAS Menus//

//prix ascendants
exports.menu_price_up = function (req, res) {
    res.send('menu price UP');
};

//prix descendants
exports.menu_price_down = function (req, res) {
    res.send('menu price DOWN');
};
