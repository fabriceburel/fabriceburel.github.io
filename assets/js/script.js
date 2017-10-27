document.getElementById('pompierInfo').style.display='none';
document.getElementById('athleInfo').style.display='none';
document.getElementById('handInfo').style.display='none';
function maskInfo(test){
  if(document.getElementById(test+'Info').style.display == 'none'){
    console.log('afficher info pompier');
    document.getElementById(test+'Info').style.display='block';
  }else if (document.getElementById(test+'Info').style.display == 'block') {
    console.log('masquer info pompier');
    document.getElementById(test+'Info').style.display='none';
  }
}
