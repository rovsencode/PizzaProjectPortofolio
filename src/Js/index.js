//Calling elements from html
const popup=document.querySelector("#pizzas .popup");

const pizzas=[];
class Pizza{
    constructor(pName,ingredients,smallPrice,imgSrc){
       this.pizzaName=pName;
       this.pizzaIngredients=ingredients;
       this.smallPrice=Number(smallPrice);
       this.sourceImg=imgSrc;
    }
}
//Pizzas
const margherita=new Pizza("Margherita","Pizza sauce, gouda cheese, mozzarella cheese, tomatoes",7.90,"./assets/images/pizzas-section/margherita.jpg");
const vegetarian=new Pizza("Vegetarian","Pizza sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms",8.90,"./assets/images/pizzas-section/vegetarian.jpg");
const funghiConPollo=new Pizza("Funghi Con Pollo","Pizza sauce, gouda cheese, mushrooms, chicken fillet",9.90,"./assets/images/pizzas-section/funghi-pollo.jpg");
const speciale=new Pizza("Speciale","Pizza sauce, gouda cheese, chicken fillet, red onion",9.90,"./assets/images/pizzas-section/speciale.jpg");
const mista=new Pizza("Mista","Pizza sauce, gouda cheese, mushrooms, ham (halal), salami (halal)",9.90,"./assets/images/pizzas-section/mista.jpg");
const salami=new Pizza("Salami","Pizza sauce, gouda cheese, salami (halal)",9.90,"./assets/images/pizzas-section/salami.jpg");
const classico=new Pizza("Classico","Pizza sauce, gouda cheese, salami (halal), mushrooms, pepperoni pepper",9.90,"./assets/images/pizzas-section/classico.jpg");
const hawaii=new Pizza("Hawaii","Pizza sauce, gouda cheese, pineapple, ham (halal)",9.90,"./assets/images/pizzas-section/hawaii.jpg");
const texas=new Pizza("Texas","Pizza sauce, gouda cheese, chicken fillet, bell pepper, corn, red onion",9.90,"./assets/images/pizzas-section/texas.jpg");
const chickenStrips=new Pizza("Chicken Strips","Barbecue sauce, gouda cheese, chicken nuggets, corn, bell pepper",10.90,"./assets/images/pizzas-section/chicken-strips.jpg");
const mexicana=new Pizza("Mexicana","Pizza sauce, gouda сheese, chicken fillet, red onion, spinach, jalapeno pepper, pepperoni",10.90,"./assets/images/pizzas-section/mexicana.jpg");
const tonnoeCipolla=new Pizza("Tonno e Cipolla","Pizza sauce, gouda cheese, tuna, red onion",10.90,"./assets/images/pizzas-section/tonno-cipolla.jpg");
const fiveChesees=new Pizza("Five Chesees","Creamy sauce, gouda cheese, mozzarella cheese, bufallo mozzarella cheese, riccota cheese, parmesan cheese",11.90,"./assets/images/pizzas-section/five-chesees.jpg");
const volcano=new Pizza("Volcano","Pizza sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms, chicken fillet, olives",11.90,"./assets/images/pizzas-section/volcano.jpg");
const sujuk=new Pizza("Sujuk","Pizza sauce, gouda сheese, bell pepper, mushrooms, sucuk",11.90,"./assets/images/pizzas-section/sujuk.jpg");
const amerikana=new Pizza("Amerikana","Barbecue sauce, gouda сheese, sausage, french friez, pickles",11.90,"./assets/images/pizzas-section/amerikana.jpg");
const fourSeasons=new Pizza("Four Seasons","Meduim - 30 sm, pizza sauce, gouda cheese, white cheese, ham (halal), sucuk, mushrooms, tomatoes, oregano",16.90,"./assets/images/pizzas-section/four-season.jpg");
const deluxe=new Pizza("Deluxe","Pizza sauce, gouda cheese, red onion, pepperoni pepper, beef",11.90,"./assets/images/pizzas-section/deluxe.jpg");
const meatLovers=new Pizza("Meat Lovers","Pizza sauce, gouda cheese, chicken fillet, beef, salami (halal), ham (halal), sucuk",12.90,"./assets/images/pizzas-section/meat-lovers.jpg");
const megaMix=new Pizza("Mega Mix","Pizza sauce, gouda сheese, tomatoes, bell pepper, mushrooms, black olives, salami (halal), ham (halal), beef, chicken fillet",12.90,"./assets/images/pizzas-section/mega-mix.jpg");



//Adding pizzas to page
const rowPizza=document.querySelector(".pizza-row");
pizzas.push(margherita,vegetarian,funghiConPollo,speciale,mista,salami,classico,hawaii,texas,chickenStrips,mexicana,tonnoeCipolla,fiveChesees,volcano,sujuk,amerikana,fourSeasons,deluxe,meatLovers,megaMix);
localStorage.setItem("pizzas",JSON.stringify(pizzas));
const localPizzas=JSON.parse(localStorage.getItem("pizzas"));
for (let i = 0; i < localPizzas.length; i++) {
        let pizza=localPizzas[i];
        showPizza(pizza);
}

//Basket
const basket=[];
const chooseButtons=document.querySelectorAll(".choose-btn");
for (let i = 0; i < chooseButtons.length; i++) {
    const chooseBtn=chooseButtons[i];
    chooseBtn.addEventListener("click",()=>{
        const parent=chooseBtn.parentElement.parentElement;
        parent.classList.add("clicked");
        const namePizza=document.querySelector(".clicked .pizza-body .card-title").innerText;
        parent.classList.remove("clicked");
        for (let index = 0; index < pizzas.length; index++) {
            var innerPizza=pizzas[i];
            if (innerPizza.pizzaName===namePizza) {
                basket.push(innerPizza);
                break;
            }
        }
    })
}
//Basket screen
localStorage.setItem("basket",JSON.stringify(basket));
const basketRow=document.querySelector(".basket-row");
const basketBtn=document.querySelector(".basket-btn");
const sliderSec=document.querySelector(".slider-section");
const basketSec=document.querySelector(".basket-section");
const sections=document.querySelectorAll("section");
const totalPriceH=document.querySelector(".total-title")

basketBtn.addEventListener("click",()=>{
    if (basket[0]===undefined) {
        alert("Your basket is empty!");
    }
    else{
        const sections=document.querySelectorAll("section");
        for (let i = 0; i < sections.length; i++) {
            const sect=sections[i];
            sect.classList.add("d-none");
        }
        sliderSec.classList.remove("d-none");
        basketSec.classList.remove("d-none");
    
        for (let j = 0; j < basket.length; j++) {
            const product=basket[j];
            showBasketPizzas(product);
         }
         let priceTotal=totalPrice(basket);
         totalPriceH.innerText+=priceTotal;
    }
});


//Return button
const menuBtn=document.querySelector(".menu-btn");
const orderSec=document.querySelector(".order-register");
menuBtn.addEventListener("click",()=>{
  for (let i = 0; i < sections.length; i++) {
    const sect=sections[i];
    sect.classList.remove("d-none");
  }
   orderSec.classList.add("d-none");
   basketSec.classList.add("d-none");
});

//Finish order
const finishBtn=document.querySelector(".finish-btn");
finishBtn.addEventListener("click",()=>{
  for (let i = 0; i < sections.length; i++) {
    const sect=sections[i];
    sect.classList.add("d-none");
  }
  sliderSec.classList.remove("d-none");
  orderSec.classList.remove("d-none");
});




//Popup
const productImages=document.querySelectorAll("#pizzas .product-img");
const zoomDivs=document.querySelectorAll("#pizzas .icon-zoom");
const popupImg=document.querySelector("#pizzas .popup .inner img");

for (let i = 0; i < productImages.length; i++) {
    const productImg=productImages[i];
    productImg.addEventListener("click",(e)=>{
        e.preventDefault();
        popupImg.setAttribute("src",productImg.getAttribute("src"));
        popup.style.display="block";
    })
    
}

for (let i = 0; i < zoomDivs.length; i++) {
    const zoomDiv=zoomDivs[i];
    zoomDiv.addEventListener("click",()=>{
        const parent=zoomDiv.parentElement;
        parent.classList.add("zoomImg");
        const imgZoom=document.querySelector(`.zoomImg img`)
        parent.classList.remove("zoomImg");
        popupImg.setAttribute("src",imgZoom.getAttribute("src"));
        popup.style.display="block";
        parent.classList.remove("zoomImg");
    })
    
}
document.addEventListener("click",(e)=>{
    if (e.target.classList.contains("popup") || e.target.classList.contains("inner")) {
        popup.style.display="none";
    }
});



//Functions
function showPizza(pizza){
    rowPizza.innerHTML+=`
        <div class="col-3 pizza">
            <div class="card pizza-card" style="width: 14rem;">
                <img src=${pizza.sourceImg} class="card-img-top product-img" alt=${pizza.pizzaName}>
                <div class="icon-zoom">
                    <i class="fa-solid fa-magnifying-glass zoom"></i>
                </div>
                <div class="card-body pizza-body">
                    <h5 class="card-title">${pizza.pizzaName}</h5>
                    <p class="card-text product-info">${pizza.pizzaIngredients}</p>
                    <h6 class="price">${pizza.smallPrice}</h6>
                    <i class="fa-solid fa-manat-sign"></i>
                    <button type="button" class="choose-btn">Choose</button>
                </div>
            </div>   
        </div>
    `  
}
function showBasketPizzas(pizza){
    basketRow.innerHTML+=`
    <div class="col-3 pizza">
        <div class="card pizza-card" style="width: 14rem;">
            <img src=${pizza.sourceImg} class="card-img-top product-img" alt=${pizza.pizzaName}>
            <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
            </div>
            <div class="card-body pizza-body">
                <h5 class="card-title">${pizza.pizzaName}</h5>
                <p class="card-text product-info">${pizza.pizzaIngredients}</p>
                <h6 class="price">${pizza.smallPrice}</h6>
                <i class="fa-solid fa-manat-sign"></i>
                <button class="remove-btn" type="button">
                     <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>   
    </div>
`
}
function totalPrice(array){
  let totalPrice=0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    totalPrice+=element.smallPrice;
  }
  return totalPrice;
}
//Slider 
const imagesOnGalery = document.querySelectorAll("#slider-section .gallery a");
const arrows = document.querySelectorAll("#slider-section .fa-solid");
const slider = document.querySelector("#slider-section .slider");
const sliderImg = document.querySelector("#slider-section .slider img");
const newBtn = document.querySelector("#slider-section .next");
const prev = document.querySelector("#slider-section .prev");
const inner = document.querySelector("#slider-section .inner");
let newElem;
imagesOnGalery.forEach((item) => {
  item.classList.add("showSlider");
  let imgSource = item.getAttribute("href");
  sliderImg.setAttribute("src", imgSource);
  slider.style.display = "flex";
  slider.classList.remove("d-none");
});

const next = function nextFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
};
setInterval(next, 2000);
newBtn.addEventListener("click", next);

prev.addEventListener("click", function (e) {
  arrowLeftFunction();
});

function arrowRightFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}
function arrowLeftFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.previousElementSibling) {
    sliderShow.previousElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.previousElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[4].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[4];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    arrowRightFunction();
  } else if (e.key === "ArrowLeft") {
    arrowLeftFunction();
  }
});

//Order-register
// ----------------------------------------------------------------------------------------
const form = document.querySelector("#order-register .row form");
const nameInput = document.querySelector("#order-register .name-of-user");
const nameError = document.querySelector("#order-register .name-error");
const numberInput = document.querySelector("#order-register .number-of-user");
const numberError = document.querySelector("#order-register .number-error");
const addressInput = document.querySelector("#order-register .address-of-user");
const addressError = document.querySelector("#order-register .address-error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const orderBtn = document.querySelector("#order-register .order-pizza");

orderBtn.addEventListener("click", (e) => {
  let nameInputCondition = false;
  let numberInputCondition = false;
  let addressInputCondition = false;
  if (nameInput.value.trim().length === 0) {
    nameError.innerHTML = "<i>Empty input name* <i>";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "<i>Correct* <i>";
    nameError.style.color = "green";
    nameInputCondition = true;
  }
  if (numberInput.value.trim().length === 0) {
    numberError.innerHTML = "<i>Empty input phone number* <i>";
    numberError.style.color = "red";
  } else if (!Number(numberInput.value.trim())) {
    numberError.innerHTML = "<i>Input should be consists only digits!* <i>";
    numberError.style.color = "red";
  } else if (numberInput.value.trim().length !== 7) {
    numberError.innerHTML =
      "<i>Number length should equals 8! For eaxmaple:2671717* <i>";
    numberError.style.color = "red";
  } else {
    numberError.innerHTML = "<i>Correct* <i>";
    numberError.style.color = "green";
    numberInputCondition = true;
  }
  if (addressInput.value.trim().length === 0) {
    addressError.innerHTML = "<i>Empty input full-address* <i>";
    addressError.style.color = "red";
  } else {
    addressError.innerHTML = "<i>Correct* <i>";
    addressError.style.color = "green";
    addressInputCondition = true;
  }

  if (nameInputCondition && numberInputCondition && addressInputCondition) {
  }
});

//Filters
// Filters
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector(".search-btn");
const rowFilter = document.querySelector(".filter-row");
const main = document.querySelector("main");
const fltContainer = document.querySelector(".filter-container");
const section = document.querySelector(".filters");
searchBtn.addEventListener("click",search )
function search() {
  let finder = pizzas.find((pizza) => {
    if (pizza.pizzaName === searchInput.value) {
      return pizza;
    }
  })
  if (finder) {
    section.classList.add("pizzas");
    main.classList.add("d-none");
    rowFilter.classList.add("pizza-row");
    fltContainer.classList.add("pizza-cont")
    rowFilter.innerHTML = "";
    rowFilter.innerHTML += `
        <div class="col-3 pizza">
            <div class="card pizza-card" style="width: 14rem;">
                <img src=${finder.sourceImg} class="card-img-top product-img" alt=${finder.pizzaName}>
                <div class="icon-zoom">
                    <i class="fa-solid fa-magnifying-glass zoom"></i>
                </div>
                <div class="card-body pizza-body">
                    <h5 class="card-title">${finder.pizzaName}</h5>
                    <p class="card-text product-info">${finder.pizzaIngredients}</p>
                    <h6 class="price">${finder.smallPrice}</h6>
                    <i class="fa-solid fa-manat-sign"></i>
                    <button type="button" class="choose-btn">Choose</button>
                </div>
            </div>   
        </div>
    
  
  `
  }
}