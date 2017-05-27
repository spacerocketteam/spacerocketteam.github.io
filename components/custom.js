function phoneScreen(appname){
  switch(appname){
    case 'CittiCard':
      document.getElementById('phone_slider').src = './images/citi-screen.webp';
      break;

    case 'InfoUneb':
      document.getElementById('phone_slider').src = './images/info-screen.webp';
      break;
    
    case 'MensagensDeDeus':
      document.getElementById('phone_slider').src = './images/msgdeus-screen.webp';
      break;
  } 
};