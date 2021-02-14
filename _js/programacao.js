/* ---- Exemplo de código JS que manipula o controle de áudio e 
da mesma forma pode manipular vídeo ---- */

var som = document.getElementById('som_controls_js');
document.getElementById('play').addEventListener('click', function() {
    som.play(); }, false);

document.getElementById('pause').addEventListener('click', function() {
    som.pause(); }, false);
