document.addEventListener('DOMContentLoaded', ()=>{
    const inputText = document.getElementById('word');
    const sendBtn = document.getElementById('send');

    sendBtn.addEventListener('click', ()=>{
        sendWord()
    })
    inputText.addEventListener('keydown', (e)=>{
        if (e.key === 'Enter'){
            sendWord()
        }
    })

    function sendWord(){
        word = inputText.value
        if (word.trim() != ''){
            window.open(`https://dictionary.bitmindai.in?word=${word}`, "_blank");
        } 
    }
})