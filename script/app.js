function carregar() {
    var aberto = window.document.getElementById('open');
    var horario = window.document.getElementById('hora');
    var data = new Date(); 
    var hora = data.getHours(); 
    var minutos = data.getMinutes(); 
    var segundos = data.getSeconds(); 

    if (hora < 10) {
        hora = '0' + hora; 
    }
    if (minutos < 10) {
        minutos = '0' + minutos; 
    }
    if (segundos < 10) {
        segundos = '0' + segundos; 
    }

    var horaCompleta = [hora, minutos, segundos].join(':'); 

    if (hora < 7 || hora > 18) {
        horario.innerHTML = `<p> Agora são ${horaCompleta} horas.<br>Estamos fechados 😞 </p>`;
    } else {
        horario.innerHTML = `<p> Agora são ${horaCompleta} horas.<br>Estamos abertos 😀</p>`
    }
    
    horario.style.fontSize = '10px';
    horario.style.float = 'right';
    horario.style.position = 'relative';
    horario.style.color = 'rgba(0, 0, 0, .4)';

    if (hora < 7 || hora > 18) {
        aberto.style.backgroundColor = 'red';
	}
}

function horaCerta() {
    setInterval(carregar, 1000);
}