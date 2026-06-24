
document.querySelectorAll('.question').forEach(btn =>{
    btn.addEventListener('click',()=>{
        const item = btn.parentElement;
        const answer = item.querySelector('.answer');
        const icon = btn.querySelector('.icon');
        const isOpen = !answer.classList.contains('hidden');

        //cerrar todos
        document.querySelectorAll('.answer').forEach(a=>a.classList.add('hidden'));
         document.querySelectorAll('.question .icon img').forEach(img => {
        img.src = 'assets/images/icon-plus.svg';
         });

        //Abrir el clickeado (si estaba cerrado)
        if(!isOpen){
            answer.classList.remove('hidden');
            icon.querySelector('img').src = 'assets/images/icon-minus.svg';
        }
       
    });
});