document.getElementById('pompierInfo').style.display='none';
document.getElementById('athleInfo').style.display='none';
document.getElementById('handInfo').style.display='none';
//création d'un match media permet de déclenché une meme action sur des évènements différents selon la taille de l'écran
if (window.matchMedia("(max-width: 1280px)").matches) {
  //lorque l'écran sera inférieur à 1280px on affichera les informations au clique
  function displayInfo(hobbie){
    if(document.getElementById(hobbie+'Info').style.display == 'none'){
      console.log('afficher info pompier');
      document.getElementById(hobbie+'Info').style.display='block';
    }else if (document.getElementById(hobbie+'Info').style.display == 'block') {
      console.log('masquer info pompier');
      document.getElementById(hobbie+'Info').style.display='none';
    }
  }
} else {
  //au dessus les informations s'afficheront au survol
  function displayInfo(hobbie){
    document.getElementById(hobbie+'Info').style.display='block';
  }
  function hideInfo(hobbie){
    console.log('blur de l\'image');
      document.getElementById(hobbie+'Info').style.display='none';
  }
}
