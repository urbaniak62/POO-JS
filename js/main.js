// var user={
//   prenom:"nico",
//   nom:"urbaniak",
//   age:38,
//   annéeDeNaissance:"né en :",
//   année:2017,
//   pays:"france",
//   moyenDePaiement:[" CB ", " visa ", " master card ", " paypal ", " bitCoins."],
// }
// alert(user.prenom);
// alert(user.nom);
// alert(user.année-user.age );
// alert(user.pays);
// alert(user.moyenDePaiement);


function user (prenom ,nom ,age ,pays ,moyenDePaiement ){
  this.prenom=prenom,
  this.nom=nom,
  this.age=age,
  this.pays=pays,
  this.moyenDePaiment=moyenDePaiement,
  // this.getName = function() {
   alert(" prenom : " + this.prenom + " nom : " + this.nom + " age : " + this.age + " pays : "
    + this.pays + " methode de paiement :" + this.moyenDePaiment);

 // };
 this.année=function(){
   alert(2017-this.age);
 }
}
var user1=new user(" nicolas . "," urbaniak . ", 38  ," FRANCE .",
" ( cb , master card , bitcoins .)");
// user1.getName();
user1.année();

/*------------------METHODE COMPARAISON----------------------------*/

function comparaison (pays ,age ,moyenDePaiement){
  this.pays=pays,
  this.age=age,
  this.moyenDePaiement=moyenDePaiement,
  this.compare= function(){

  };

};
  var comparaitre=new comparaison(" FRANCE .",18,"cb");

  /*---------------AGE-DU-CLIENT----------------*/
if(comparaitre.age<user1.age){
  alert("c'est GOOD..");
}
  else{
  alert("vous etes trop jeune.");
  /*---------------PAYS--------------------------*/
};
if(comparaitre.pays!=user1.pays){
  alert("vous n'etes pas au bon endroit")
}
else {
  alert("bienvenue");
};
/*--------------------METHODE-DE-PAIEMENT----------------*/

/*----------------------USER-2-----------------------------*/

// var user2=new user("Prenom : rocco / "," nom : sifredi / age : ", 45 ,"ans / pays : italie / "," moyen de Paiement : NATURE .");
// user2.getName();

/*-------------------ESSAI 1---------------------------*/

// function jean (taille,longueur,couleur,){
//   this.taille=taille,
//   this.longueur=longueur,
//   this.couleur=couleur,
//   this.getJean=function(){
//   alert(this.taille + this.longueur + this.couleur);
// }
// };
// var client= new jean( "tour de taille : 32 / " , "hauteur :  178 cm / " , "couleur : bleu .");
// client.getJean();
//
// var client2= new jean("taille : 32 / " , " hauteur : 195 cm / " , "couleur : beige");
// client2.getJean();
