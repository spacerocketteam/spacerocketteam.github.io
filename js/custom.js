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


function mailPOST() {
    // $(".test").modal('show','closable', true);/*
    var params = 'nome=' + document.getElementById('name').value + '&email=' + document.getElementById('email').value + '&mensagem=' + document.getElementById('message').value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("modalmail").innerHTML = this.responseText;
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            $(".test").modal('show', 'closable', true);
        }
    };
    xmlhttp.open("POST", "mail.php", true);

    //Send the proper header information along with the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlhttp.send(params);
    //*/
};


