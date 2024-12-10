(function(){
    window.addEventListener("DOMContentLoaded", function() {
        const carte = document.querySelector('.carte');
        const loader = document.querySelector('.loader');

        window.addEventListener('load', () => {
        
            loader.classList.add('fondu-out')
            setTimeout(() => {  loader.style.display = 'none';}
                , "1 second");
            }
        );   
    }, false);
})()
