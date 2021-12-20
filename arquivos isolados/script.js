function carregar() {
    var corp = document.getElementsByTagName("body")[0];
    var msg = window.document.querySelector("div#msgday");
    var smsg = window.document.querySelector("div#msgg");
    var img = window.document.getElementById("foto");
    var now = new Date();
    var horday = now.getHours();
    var minday = now.getMinutes();
  
    msg.innerHTML = `<p>Agora são ${horday} horas e ${minday} minutos</p>`;
    if (horday < 12) {
      //Bom Dia
      img.src = img/morning.jpg;
      smsg.innerHTML += "<p>Bom Dia!</p>";
      corp.style.background = rgb(227, 204, 204);
    } else if (horday >= 12 && horday < 18) {
      //Boa Tarde
      img.src = img/afternoon.jpg;
      smsg.innerHTML += "<p>Boa tarde!</p>";
      corp.style.background = rgb(255, 255, 90);
    } else {
      //Boa Noite
      img.src = img/night.jpg;
      smsg.innerHTML += "<p>Boa noite!</p>";
      corp.style.background = rgb(128, 128, 128);
    }
  }