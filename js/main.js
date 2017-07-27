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
  this.getName = function() {
   alert(this.prenom + this.nom + this.age + this.pays + this.moyenDePaiment);

 };
 this.année=function(){
   alert(2017-this.age);
 }
}
var user1=new user("prenom : nicolas / ","nom : urbaniak / age : ", 38   ," /  pays : france / ",
" moyen de paiement : ( cb , master card , bitcoins .)");
user1.getName();
user1.année();
/*----------------------USER-2-----------------------------*/

var user2=new user("Prenom : rocco / "," nom : sifredi / age : ", 45 ,"ans / pays : italie / "," moyen de Paiement : NATURE .");
user2.getName();

/*-------------------ESSAI 1---------------------------*/

function jean (taille,longueur,couleur,){
  this.taille=taille,
  this.longueur=longueur,
  this.couleur=couleur,
  this.getJean=function(){
  alert(this.taille + this.longueur + this.couleur);
}
};
var client= new jean( "32 " , " 178 cm " , " bleu .");
client.getJean();

var client2= new jean("taille : 32 / " , " hauteur : 195 cm / " , "couleur : beige");
client2.getJean();
