// function que lê textos

function LerTexto() {
    var mensagem = new SpeechSynthesisUtterance();
    var vozes = speechSynthesis.getVoices();
    //mensagem.text = "Ao verme que primeiro roeu as frias carnes do meu cadáver, dedico como saudosa lembrança estas Memórias Póstumas";
    mensagem.voice = vozes[1];
    speechSynthesis.speak(mensagem);
}

LerTexto()