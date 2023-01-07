// Alapertek felvetele

let count = 0;

//Gombok es egyeb elemek eltarolasa valtozoba

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn"); //3 elem van a btn classab ellatva

//Ciklussal vegiglepkedek az eltarolt .btn classu gombokon

btns.forEach((btn) => {


//Az osszes gomb kozul arra kattintok ra, amelyik a ciklusfutaskor kovetkezik
    btn.addEventListener('click', (e) => {

//Megnezzuk hogy az aktualisan megkantitott gombon milyen class/classok vannak

    const style = e.currentTarget.classList;
    
//Megnezzuk hogy a megkantitott gomb tartalmazza e a "decrease" class-t    
    if(style.contains('decrease')){

//Ha igen, akkor az alapertekunket csokkentjuk
        
        count--;

    }
//Megnezzuk hogy a megkantitott gomb tartalmazza e a "increase" class-t

    else if(style.contains('increase')){

//Ha igen, akkor az alapertekunket noveljuk
        
        count++;
    }

//Ha ezek kozul egyik sem, akkor marad a "reset"    
    else{

        count = 0;
    }

//Adjuk hozza a szineket, annak fuggvenyeben, hogy a szam pozitiv vagy negativ erteku

    if(count > 0){

        value.style.color = "green";
    }

    else if (count < 0){

        value.style.color = "red";
    }

    else{

        value.style.color = "black"
    }

//Beletoltjuk a span-be az alapertekunk aktualis ereket

    value.textContent = count;

    })

})