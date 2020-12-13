"use strict";

// NOE LIBON 13/11/2020

let ensemble = [];
const PRIX = 50;
let prixTotal = 0;
let identifiants = [];
let identite = [];



function ajouterAuPanier(commande) {
    ensemble.push([commande.nom.value, commande.quel.value, commande.couleur.value, Number(commande.nombre.value), commande.paiement.value, PRIX * commande.nombre.value]);
    prixTotal += PRIX * commande.nombre.value;
    var body = document.getElementsByTagName('body')[0];
    let li = '';
    body.innerHTML += "<ul id='maListe'></ul>";
    for (var i in ensemble) {
        if (commande.nombre.value !== "1") {
            li = "<li>Bonjour " + ensemble[i][0] + ", vous avez ajouté au panier " + ensemble[i][3] + " " + ensemble[i][1] + "s " + ensemble[i][2] + "s et vous voulez payé " + ensemble[i][5] + "$ par " + ensemble[i][4] + " ! </li>";
        }
        else {
            li = "<li>Bonjour " + ensemble[i][0] + ", vous avez ajouté au panier " + ensemble[i][3] + " " + ensemble[i][1] + " " + ensemble[i][2] + " et vous voulez payé " + ensemble[i][5] + "$ par " + ensemble[i][4] + " ! </li>";
        }
    }
    document.getElementById('maListe').innerHTML += li;
    if (commande.nombre.value !== "1") {
        console.log("Bonjour " + commande.nom.value + ", vous avez ajouté au panier " + commande.nombre.value + " " + commande.quel.value + "s " + commande.couleur.value + "s et vous voulez payé " + PRIX * commande.nombre.value + "$ par " + commande.paiement.value + " ! ");
    }
    else {
        console.log("Bonjour " + commande.nom.value + ", vous avez ajouté au panier " + commande.nombre.value + " " + commande.quel.value + " " + commande.couleur.value + " et vous voulez payé " + PRIX * commande.nombre.value + "$ par " + commande.paiement.value + " ! ");
    }
    console.log('La somme totale a payée est de ' + prixTotal + '$.');
    return false;
}

function allerAuPanier() {
    console.log(ensemble);
    let affichagePanier = document.getElementById('afficherLePanier').innerHTML;
}

function commander() {
    if (ensemble.length === 0) {
        console.log('La commande a échouée, veuillez rafraichir la page svp.');
        document.getElementById("recuFinal").innerHTML = '<p><strong>La commande a échouée, veuillez rafraichir la page svp (ou réapprovisionner votre panier). </strong></p>';
    }
    else {
        console.log('La commande a bien été effectuée !');
        document.getElementById("recuFinal").innerHTML = '<p><strong>La commande a été effectuée avec succès ! </strong></p>';
    }
    ensemble = [];
}

function creerUnCompte(compte) {
    identifiants = [compte.mail.value, compte.motDePasse.value];
    return false;
}


function validerAdresse() {
    console.log(identifiants);
    document.getElementById('confirmation').innerHTML = '<p><strong>Votre compte a bien été créé ! </strong></p><br><hr>';
    document.getElementById('formulaire1').innerHTML = '';
    document.getElementById('formulaire2').innerHTML = '';
}

function seConnecter(identifiant) {
    identite = [identifiant.adresse.value, identifiant.motdepasse.value];
    console.log(identite);
    if (identite[0] === identifiants[0] && identite[1] === identifiants[1]) {
        document.getElementById('connection').innerHTML = '<p><strong><a href="html/tr10.html">Faire la commande</a></strong></p>';
    }
    else {
        document.getElementById('connection').innerHTML = '<p><strong>Erreur<br><br>Différents problèmes possibles : </strong></p><ol><li>Pas de compte.</li><br><li>Mot de passe erroné.</li><br><li>Email erronée.</li><br><li>Compte non vérifié.</li></ol>';
    }
    return false;
}