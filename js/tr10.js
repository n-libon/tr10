"use strict";

// NOE LIBON 13/11/2020

let ensemble = [];
let prix = 0;
let identifiants = [];
let identite = {};
let recuDeLaCmd = '';
let somme = 0;
let dernier = 0;
let triageAffichage = '';
let arrTriage = [{type: 'Pantalon', prix: '99.99 $'}, {type: 'Sweatshirt', prix: '89.99 $'}, {type: 'Chaussure', prix: '79.99 $'}, {type: 'Pull', prix: '69.99 $'}, {type: 'Short', prix: '55.99 $'}, {type: 'Chemise', prix: '41.99 $'}, {type: 'T-shirt', prix: '31.99 $'}, {type: 'Caleçon', prix: '15.99 $'}, {type: 'Paire de chaussettes', prix: '9.99 $'}];


function ajouterAuPanier(commande) {
    if (commande.quel.value === 'pantalon') {
        prix = 99.99;
    }
    if (commande.quel.value === 'sweatshirt') {
        prix = 89.99;
    }
    if (commande.quel.value === 'chaussure') {
        prix = 79.99;
    }
    if (commande.quel.value === 'pull') {
        prix = 69.99;
    }
    if (commande.quel.value === 'short') {
        prix = 55.99;
    }
    if (commande.quel.value === 'chemise') {
        prix = 41.99;
    }
    if (commande.quel.value === 'tshirt') {
        prix = 31.99;
    }
    if (commande.quel.value === 'calecon') {
        prix = 15.99;
    }
    if (commande.quel.value === 'chaussette') {
        prix = 9.99;
    }
    ensemble.push([commande.quel.value, commande.couleur.value, Number(commande.nombre.value), commande.paiement.value, prix * commande.nombre.value]);
    var liste = document.getElementById('afficherLePanier');
    let li = '';
    liste.innerHTML += "<ul id='maListe'></ul>";
    for (var i in ensemble) {
        if (commande.nombre.value !== "1") {
            li = "<li>Vous avez ajouté au panier " + ensemble[i][2] + " " + ensemble[i][0] + "s " + ensemble[i][1] + "s ! </li>";
        }
        else {
            li = "<li>Vous avez ajouté au panier " + ensemble[i][2] + " " + ensemble[i][0] + " " + ensemble[i][1] + " ! </li>";
        }
    }
    document.getElementById('maListe').innerHTML += li;
    if (commande.nombre.value !== "1") {
        console.log("Vous avez ajouté au panier " + commande.nombre.value + " " + commande.quel.value + "s " + commande.couleur.value + "s ! ");
    }
    else {
        console.log("Vous avez ajouté au panier " + commande.nombre.value + " " + commande.quel.value + " " + commande.couleur.value + " ! ");
    }
    for (var j in ensemble) {
        dernier = ensemble[j][4];
    }
    somme += dernier;
    return false;
}

function allerAuPanier() {
    console.log(ensemble);
    console.log('total = ' + somme.toFixed(2) + ' $');
    document.getElementById('prixPanier').innerHTML = '<p><strong>total = ' + somme.toFixed(2) + ' $</strong>';
}

function commander() {
    if (ensemble.length === 0 || recuDeLaCmd === '') {
        console.log('La commande a échouée, veuillez rafraichir la page svp.');
        document.getElementById("recuFinal").innerHTML = '<p><strong>La commande a échouée, veuillez rafraichir la page svp, entrer un nom (ou réapprovisionner votre panier). </strong></p>';
    }
    else {
        console.log('La commande a bien été effectuée !');
        document.getElementById("recuFinal").innerHTML = '<p><strong>La commande au nom de ' + recuDeLaCmd + ' a été effectuée avec succès ! </strong></p>';
    }
    dernier = 0;
    somme = 0;
    ensemble = [];
    document.getElementById('prixPanier').innerHTML = '';
    document.getElementById('maListe').innerHTML = '';
}

function creerUnCompte(compte) {
    identifiants = [compte.mail.value, compte.motDePasse.value];
    console.log('Un email vous a été envoyé pour valider votre adresse mail !');
    document.getElementById('compte').innerHTML = document.getElementById('compte').innerHTML + '<p><strong>Un email vous a été envoyé pour valider votre adresse mail !</strong></p>';
    return false;
}


function validerAdresse() {
    console.log(identifiants);
    if (identifiants.length !== 0) {
        document.getElementById('confirmation').innerHTML = '<p><strong>Votre compte a bien été créé ! </strong></p><br><hr>';
        document.getElementById('formulaire1').innerHTML = '';
        document.getElementById('formulaire2').innerHTML = '';
    }
}

function seConnecter(identifiant) {
    identite = {adresseMail : identifiant.adresse.value, motDePasse : identifiant.motdepasse.value};
    console.log(identite);
    if (identite.adresseMail === identifiants[0] && identite.motDePasse === identifiants[1]) {
        document.getElementById('connection').innerHTML = '<p><strong><a href="html/tr10.html">Faire la commande</a></strong></p>';
        document.getElementById('identifiants').innerHTML = '<p><strong>Bonjour, vous êtes connecté en tant que ' + identifiants[0] + ' !</strong>';
    }
    else {
        document.getElementById('connection').innerHTML = '<p><strong>Erreur<br><br>Différents problèmes possibles : </strong></p><ol><li>Pas de compte.</li><br><li>Mot de passe erroné.</li><br><li>Email erronée.</li><br><li>Compte non vérifié.</li></ol>';
    }
    return false;
}

function nommerLaCommande(recu) {
    recuDeLaCmd = recu.nomDuRecu.value;
    document.getElementById('formNomCommande').innerHTML = '<p><strong>Bonjour ' + recuDeLaCmd + ' !</strong>';
    return false;
}

function triage(x, y) {
    if (x.type > y.type) {return 1}
    if (x.type < y.type) {return -1}
    return 0;
}

let triageAlpha = arrTriage.sort(triage);
function trier() {
    for (let i in arrTriage) {
        triageAffichage = Object.values(arrTriage[i]);
        let triAffichageWeb = triageAffichage.join(' - ');
        console.log(triAffichageWeb);
        document.getElementById('triageAlpha').innerHTML += '<li>' +triAffichageWeb + '</li>';
    }
}