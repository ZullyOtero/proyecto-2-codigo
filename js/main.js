const menuItems=document.querySelectorAll('.menu-Item');

menuItems.forEach(function(item) {
    item.addEventListener ('click', function (e) {
        const currentItem = document.querySelector ('.active') ;
        currentItem.classList.remove ('active');
        e.target.classList.add ('active');

    });
    
});

const changeBackgroundBtn = document.querySelector ('#change-background');

changeBackgroundBtn.addEventListener ('click', function () {
    document.body.classList.toggle ('change-background')
})