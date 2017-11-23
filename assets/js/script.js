document.getElementById('pompierInfo').style.display='none';
document.getElementById('athleInfo').style.display='none';
document.getElementById('handInfo').style.display='none';
if (window.matchMedia("(max-width: 1280px)").matches) {
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
  function displayInfo(hobbie){
    document.getElementById(hobbie+'Info').style.display='block';
  }
  function hideInfo(hobbie){
    console.log('blur de l\'image');
      document.getElementById(hobbie+'Info').style.display='none';
  }
}

/*
}*/
