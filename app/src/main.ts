let blockExitFromBurger = document.querySelectorAll("#exitBurger");

let openBurgerMenu = document.getElementById("openBurgerMenu");
let burgerMenuContainer = document.getElementById("burgerMenuContainer");

function toggleState(){

    if(!openBurgerMenu || !blockExitFromBurger || !burgerMenuContainer){
        return
    }

    blockExitFromBurger.forEach(elem => {
        elem.addEventListener('click', function() {
            burgerMenuContainer.classList.remove('active');
        });
    })

    openBurgerMenu.addEventListener('click', function() {
        burgerMenuContainer.classList.add('active');
    });

    console.log(burgerMenuContainer.style);

}

toggleState()