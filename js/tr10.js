"use strict";

// NOE LIBON 06/11/2020 (Joyeux St-Nicolas)

let ensemble = [];
const PRIX = 50;
let prixTotal = 0;

function ajouterAuPanier(commande) {
    ensemble.push([commande.nom.value, commande.quel.value, commande.couleur.value, Number(commande.nombre.value), commande.paiement.value, PRIX * commande.nombre.value]);
    prixTotal += PRIX * commande.nombre.value;
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