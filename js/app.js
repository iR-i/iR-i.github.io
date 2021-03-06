

const mNavHambergurIcon = document.querySelector('.mobile-nav-bar-hamburger-icon');
const mNavItemContainer = document.querySelector('.mobile-nav-item-menu-container');
const mNavItemCloseBtn = document.querySelector('.nav-item-close');

var bgAudio = document.querySelector('#bgAudio');

var welcome = document.querySelector('.welcome'); 
var welcomeH1 = document.querySelector('.welcome h1');
var welcomeH5 = document.querySelector('.welcome h5');

const DIV_myPortolfio = document.querySelector('.my-portoflio');

function main(){

    DIV_myPortolfio.style.height = 100 * 2+ 'vh';

    mNavItemContainer.style.visibility = "hidden";
    MobileNavHamburgerButton();    

    pageOnLoad();
}

function pageOnLoad(){
    
    window.onload = () => {

        welcomeH1.innerHTML = '';
        welcomeH5.innerHTML = 'CLICK ANYWHERE TO CONTINUE';

        welcome.addEventListener('click', ()=>{

            welcome.style.opacity = '0';
            welcome.style.zIndex = '-1';
            document.documentElement.style.overflow ='visible';

            if(document.getElementById('typed-config-js') <= 0){
                const typedJS = document.createElement('script');
                typedJS.id = 'typed-config-js';
                typedJS.src = "./js/typed-config.js";
                document.body.appendChild(typedJS);
            }

            bgAudio.play();

        });
    }

}

function MobileNavHamburgerButton(){
    
    mNavHambergurIcon.addEventListener('click', ()=>{

        if(mNavItemContainer.style.visibility === "hidden"){
            mNavItemContainer.style.visibility = "visible";
            console.log('visible');
        } else{
            console.log('hidden');
            mNavItemContainer.style.visibility = "hidden";
        }

    });

    mNavItemCloseBtn.addEventListener('click', ()=>{
        mNavItemContainer.style.visibility = "hidden";
    });

}

main();



