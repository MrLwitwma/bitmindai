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


    const navButton = document.getElementById('icon');
    const navBar = document.getElementById('nav');
    // let isClickable = true;

    navButton.addEventListener('click', () => {
        // if (!isClickable) return;
        // isClickable = false; // Disable further clicks temporarily


        if (navBar.style.display == 'none'){
            navButton.setAttribute('src', '/static/pane-close.svg')
            navBar.style.display = 'block'
        } else{
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }


        // // Re-enable clicks after 0.5 seconds
        // setTimeout(() => {
        //     isClickable = true;
        // }, 500);
    });


    function handleResize() {
        if (window.innerWidth <= 1000) {
            navButton.setAttribute('src', 'static/pane-open.svg')
            navBar.style.display = 'none'
        }
    }
    
    // Run on page load
    handleResize();
    // Run on window resize
    window.addEventListener('resize', handleResize);
    

})