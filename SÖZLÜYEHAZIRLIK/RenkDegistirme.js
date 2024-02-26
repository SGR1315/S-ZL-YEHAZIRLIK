function degistir(){
    var renkler = ['blue', 'red', 'gray','yellow',' orange', 'green'];
    var rastgeleRenk = Math.floor(Math.random()*renkler.length);
    document.body.style.backgroundColor = renkler[rastgeleRenk];
}