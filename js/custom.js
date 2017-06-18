function phoneScreen(appname) {
    switch (appname) {
        case 'CittiCard':
            document.getElementById('phone_slider').src = './assets/images/citticard/screen-home.jpg';
            break;

        case 'InfoUneb':
            document.getElementById('phone_slider').src = './assets/images/infouneb/screen-home.jpg';
            break;

        case 'MensagensDeDeus':
            document.getElementById('phone_slider').src = './assets/images/mensagens/screen-home.jpg';
            break;
    }
};




