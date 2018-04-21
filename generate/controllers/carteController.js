/* global app */

var data = require('../models/carteModel');
//ici toutes les FONCTIONS pour gérer les cartes


//listeDeCartes =[]; ---> déjà déclarer dans Modules
var id = 0; //car id++ 

exports.create_carte = function (req, res) {
    res.send('carte added with id: ' + req.params.id);
//    //if (req.params.body) {
//        carte = {
//            id: id++,
//            nom: req.body.nom,
//            menus: []
//        };
//
//        //console.log(req.body);
//        return data.listeDeCartes.push(carte);
//        res.status(200).json({
//            data: carte.id});
//    }
//    return data.listeDeCartes.push(carte);
//    res.status(404).json({
//        data: carte.id});
};

//récupérer le menu par l'id
for (var i in data.listeDeCartes) {
    for (var k in data.listeDeCartes[i].menus)
        if (data.listeDeCartes[i].menus[k].id == req.params.menuId)
            ;
    res.status(200).json({
        data: data.listeDeCartes[i].menus[k]
    });
}
;


/*exports. xxx = function (req, res){
 res.send ('xxx');
 }
 */

// :) Page index après connection réussie '/cartes'
exports.index = function (req, res) {
    res.send('index: welcome to Restologue ');
};

//-------------------------------------------------------------------
// :) affiche toutes les cartes seulement
exports.carte_list_get = function (req, res) {
    res.send('carte list GET: here all your cards');
};

exports.carte_list_post = function (req, res) {
    res.send('carte list POST');
};

//--------------------------------------------------------------------

//Affiche carte par son id
exports.carte_id_get = function (req, res) {
    res.send('carte id GET:' + req.params.id);
};

exports.carte_id_post = function (req, res) {
    res.send('carte id POST:' + req.params.id);
};

//-----------------------------------------------------------------
//créer une nouvelle carte |||RETOURNER L'ID|||
exports.carte_add_get = function (req, res) {
    res.send('carte add GET');
};

exports.carte_add_post = function (req, res) {
    res.send('carte add POST');
};

//-----------------------------------------------------------------
//supprimer la carte 
exports.carte_remove_get = function (req, res) {
    res.send('carte remove GET');
};

exports.carte_remove_post = function (req, res) {
    res.send('carte remove POST');
};

//---------------------------------------------------------------------

//EXTRAS Cartes//

//prix ascendants
exports.carte_price_up = function (req, res) {
    res.send('carte price UP');
};

//prix descendants
exports.carte_price_down = function (req, res) {
    res.send('carte price DOWN');
};


//--------------------MENUS----------------------------------------------














