function phoneScreen(appname){
  switch(appname){
    case 'CittiCard':
      document.getElementById('phone_slider').src = './images/citi-screen.webp';
      break;

    case 'InfoUneb':
      document.getElementById('phone_slider').src = './images/info-screen.webp';
      break;
    
    /*case 'MensagensDeDeus':
      document.getElementById('phone_slider').src = 'http://static.mnium.org/images/contenu/actus/JeuxVideo/Pokemon/pokemon_go/pokemon_go_screenshot_field_tests_3_hd.jpg';
      break;*/
  } 
};