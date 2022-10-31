const combos = [];
const salads = [];
const cakes = [];
const soups = [];
const snacks = [];
const souces = [];
const deserts = [];
const drinks = [];
class ComboMenu{
    constructor(pName,ingredients,comboPrice,imgSrc){
       this.comboName=pName;
       this.comboIngredients=ingredients;
        this.sourceImg = imgSrc;
        this.comboPrice=Number(comboPrice);
    }
} 
class Salads{
    constructor(pName,ingredients,price,size,imgSrc){
       this.saladName=pName;
       this.saladIngredients=ingredients;
        this.saladImg = imgSrc;
        this.saladSize = size;
        this.saladPrice=Number(price);
    }
} 
class Cakes{
      constructor(pName,ingredients,price,imgSrc){
       this.cakeName=pName;
       this.cakeIngredients=ingredients;
       this.cakeImg = imgSrc;
       this.cakePrice=Number(price);
    }
    
}
class Soups{
      constructor(pName,ingredients,price,size,imgSrc){
       this.soupName=pName;
       this.soupIngredients = ingredients;
       this.soupSize = size;
       this.soupImg = imgSrc;
       this.soupPrice=Number(price);
    }
}
class Snacks{
       constructor(pName,ingredients,price,imgSrc){
       this.snackName=pName;
       this.snackIngredients = ingredients;
       this.snackPrice=Number(price);
       this.snackImg = imgSrc;
    }

}
class Souces{
       constructor(pName,price,imgSrc){
       this.souceName=pName;
       this.soucePrice=Number(price);
       this.souceImg = imgSrc;
    }

}
class Deserts{
    constructor(pName,price,imgSrc){
       this.desertName=pName;
       this.desertPrice=Number(price);
       this.desertImg = imgSrc;
    }

}
class Drinks{
  constructor(pName,price,size,imgSrc){
       this.drinkName=pName;
       this.drinkPrice = Number(price);
       this.drinkSize=size
       this.drinkImg = imgSrc;
    }

}

//Combo-menu
const familyCombo = new ComboMenu("Family Combo", " Large salami pizza, mixed panini (6 pieces), nuggets (6 pieces), french fries, Coca-Cola 1L", 27.90, "./assets/combo-menu/images/combo-menu-pizza1.jpg");
const clubSandwichCombo =new ComboMenu("Club Sandwich, French Fries, Coca-Cola 0.33L", " Club Sandwich, French Fries, Coca-Cola 0.33L", 9.90, "./assets/combo-menu/images/combo-menu-pizza2.jpg");
const  fourCombo= new ComboMenu("Four Seasons Combo"," Medium four season pizza, french fries, Coca-Cola 1L",9.90,"./assets/combo-menu/images/combo-menu-pizza3.jpg")
//Adding combos to page
const rowCombo=document.querySelector(".combo-row");
combos.push(familyCombo,clubSandwichCombo,fourCombo);
localStorage.setItem("combos", JSON.stringify(combos));

function showCombosOnScreen() {
    const localCombos=JSON.parse(localStorage.getItem("combos"));
    for (let i = 0; i < localCombos.length; i++) {
        let combo=localCombos[i];
        showCombo(combo);
      
    }
}
function showCombo(combo){
    rowCombo.innerHTML+=   `<div class="col-3 col3-pizza">
            <div class="card combo-card" style="width: 18rem">
              <img
                src=${combo.sourceImg}
                class="card-img-top"
                alt=${combo.comboName}
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body combo-card-body">
                <h5 class="card-title">${combo.comboName}</h5>
                <p class="card-text">
                  ${combo.comboIngredients}
                </p>
                <h5 class="price">${combo.comboPrice}</h5>
                <i class="fa-solid fa-manat-sign combo-icon"></i>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div> `
}
//salads
const hellenic = new Salads("Hellenic", " Iceberg lettuce, tomatoes, cucumbers, white cheese, black olives, olive oil, lemon juice, spices", 5.90, "300 qr","./assets/combo-menu/images/yunan-salad.jpg")
const special = new Salads("Special", "Iceberg lettuce, carrot, tomato, cucumber, corn, chicken fillet, gouda cheese, dried bread, special sauce, spices", 6.90, "300qr","./assets/combo-menu/images/spacile-salad.jpg");
const caprice = new Salads("Caprice", "Iceberg lettuce, tomato, cucumber, corn, carrot, gouda cheese, tuna, beef ham (halal), cocktail sauce", 7.90, "300qr","./assets/combo-menu/images/kapricoza.jpg");
const caesar = new Salads("Caesar", "Iceberg lettuce, tomato, chicken fillet, parmesan cheese, dry bread, classic Caesar sauce", 7.90, "300 qr","./assets/combo-menu/images/sezar-salad.jpg");
//Adding  salads to page
const rowSalad=document.querySelector(".salad-row");
salads.push(hellenic,special,caprice,caesar);
localStorage.setItem("salads", JSON.stringify(salads));

function showSaladOnScreen() {
    const localSalad = JSON.parse(localStorage.getItem("salads"));
    for (let i = 0; i < localSalad.length; i++) {
        let salad = localSalad[i];
        showSalad(salad);
      
    }
}
function showSalad(salad) {
    rowSalad.innerHTML += `
           <div class="col-3 col3-salad">
            <div class="card salad-card" style="width: 18rem">
              <img
                src=${salad.saladImg}
                class="card-img-top"
                alt="${salad.saladName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body salad-card-body">
                <h5 class="card-title price">${salad.saladName}</h5>
                <p class="card-text product-info">
                 ${salad.saladIngredients}
                </p>
                <br />
                <div class="salad-price">
                  <h5 class="price">${salad.saladPrice}</h5>
                  <i class="fa-solid fa-manat-sign salad-icon"></i>
                  <p class="salad-size">${salad.saladSize}</p>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div> 
    `
}
//cakes
const specialFettuccine=new Cakes("Special Fettuccine"," Fettuccine pasta, chicken fillet, spinach, bell pepper, tomato sauce, gouda cheese, cream sauce, oregano",6.90,"./assets/pasta/images/fettucni-pasta.jpg")
const penne = new Cakes("Penne Kon Chicken", " Iceberg lettuce, tomato, cucumber, corn, carrot, gouda cheese, tuna, beef ham , cocktail sauce", 9.90,"./assets/pasta/images/penne-pasta.jpg");

//Adding  cakes to page
const rowCakes=document.querySelector(".pasta-row");
cakes.push(specialFettuccine,penne);
localStorage.setItem("cakes", JSON.stringify(cakes));

function showCakesOnScreen() {
    const localCakes = JSON.parse(localStorage.getItem("cakes"));
    for (let i = 0; i < localCakes.length; i++) {
        let cake = localCakes[i];
        showCake(cake);
      
    }
}
function showCake(cake) {
    rowCakes.innerHTML += `
     <div class="col-3 col3-pasta">
            <div class="card pasta-card" style="width: 18rem">
              <img
                src="${cake.cakeImg}";
                class="card-img-top"
                alt="${cake.cakeName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body pasta-card-body">
                <h5 class="card-title">${cake.cakeName}</h5>
                <p class="card-text">
                 ${cake.cakeIngredients}
                </p>
                <br />
                <div class="pasta-price">
                  <h5 class="price">${cake.cakePrice}</h5>
                  <i class="fa-solid fa-manat-sign pasta-icon"></i>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
    
    `
    
}

//Soups
const lentilSoup = new Soups("LentilSoup", "Lentils, tomato paste, onions, carrots, spices", 2.90, "250 ml", "./assets/soup/images/merci-soup.jpg")
const mushroomSoup = new Soups("Mushroom Soup", "Mushrooms, onions, cream, spices", 3.90, "250 ml","./assets/soup/images/gobelek-soup.jpg");
const tomotoSoup = new Soups("Tomato soup", "Tomato, carrot, onion, cream, spices", 3.90, "250 ml", "./assets/soup/images/tomat-soup.jpg");
//Adding soups to page
const rowSoups=document.querySelector(".soup-row");
soups.push(lentilSoup,mushroomSoup,tomotoSoup);
localStorage.setItem("soups", JSON.stringify(soups));

function showSoupOnScreen() {
    const localSoup = JSON.parse(localStorage.getItem("soups"));
    for (let i = 0; i < localSoup.length; i++) {
        let soup = localSoup[i];
        showSoup(soup);
      
    }
}
function showSoup(soup) {
    rowSoups.innerHTML += `
      <div class="col-3 col3-soup">
            <div class="card soup-card" style="width: 18rem">
              <img
                src="${soup.soupImg}"
                class="card-img-top"
                alt="${soup.soupName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body soup-card-body">
                <h5 class="card-title">${soup.soupName}</h5>
                <p class="card-text">
                  ${soup.soupIngredients}
                </p>
                <div class="soup-price">
                  <h5 class="price">${soup.soupPrice}</h5>
                  <i class="fa-solid fa-manat-sign soup-icon"></i>
                  <p class="soup-size">${soup.soupSize}</p>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
     
    `
 }

 //Snacks
const paniniSimple = new Snacks("Panini (Simple)", "beef simple tuna", 1.90,"./assets/snack/images/panini.jpg");
const frenchFries = new Snacks("French fries", "French fries", 3.90, "./assets/snack/images/fri.jpg");
const countryPotatoes = new Snacks("Country Potatoes", "Rustic fried potatoes", 3.90, "./assets/snack/images/kend-kartofu.jpg");
const panini = new Snacks("Panini", "Beef ham or tuna or salami", 5.90, "./assets/snack/images/perfect-panini.jpg");
const nuggets = new Snacks("Nuggets", "nuggets", 5.90, "./assets/snack/images/naggets.jpg");
const calzone = new Snacks("Calzone", "  Chicken fillet or beef ham or salami , pickles, tomatoes,gouda cheese, potatoes, special sauce", 5.90, "./assets/snack/images/kalzone.jpg");
const caesarRoll = new Snacks("Caesar roll", "   Lavash, gouda cheese, lettuce, tomato, carrot, chicken fillet,classic Caesar sauce", 7.90, "./assets/snack/images/sezar-roll.png");
const chickenRoll = new Snacks("Chicken roll", "   Lavash, gouda cheese, lettuce, chicken fillet, special sauce, red onion, pickled cucumber, french fries", 7.90, "./assets/snack/images/ciken-roll.png");
const sandwichFries = new Snacks("Club Sandwich and Fries", "Toast bread, egg, tomato, cucumber, pizza cheese, chicken fillet, mayonnaise", 9.90, "./assets/snack/images/klab-sendvic.jpg");
const nuggetsFries = new Snacks("Nuggets and French Fries", "Chicken nuggets 6 pieces, french fries",8.90, "./assets/snack/images/nuggets-fri.jpg");
//Adding snacks to page
const rowSnack = document.querySelector(".snack-row");
snacks.push(paniniSimple, frenchFries, countryPotatoes, panini,nuggets,calzone,caesarRoll,chickenRoll,sandwichFries,nuggetsFries);
localStorage.setItem("snacks", JSON.stringify(snacks));
function showSnacksOnScreen() {
    const localSnacks=JSON.parse(localStorage.getItem("snacks"));
    for (let i = 0; i < localSnacks.length; i++) {
        let snack=localSnacks[i];
        showSnacks(snack);
      
    }
}
function showSnacks(snack) {
    rowSnack.innerHTML += `
             <div class="col-3 col3-snack">
            <div class="card snack-card" style="width: 18rem">
              <img
                src="${snack.snackImg}"
                class="card-img-top"
                alt="${snack.snackName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body snack-card-body">
                <h5 class="card-title">${snack.snackName}</h5>
                <p class="card-text">${snack.snackIngredients}</p>
                <br />
                <div class="snack-price">
                  <h5 class="price">${snack.snackPrice}</h5>
                  <i class="fa-solid fa-manat-sign snack-icon"></i>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
    
    `
}
//Souces
const cheeseSouce= new Souces("Cheese Sauce",0.80,"./assets/sous-menu/images/pendir-sous.jpg")
const barbecueSouce= new Souces("Barbecue Sauce",0.80,"./assets/sous-menu/images/barbeku-sous.jpg")
const  ketchup= new Souces("Ketchup",0.80,"./assets/sous-menu/images/ketcup-sous.jpg") 
//Adding soces to page
const rowSouce = document.querySelector(".souces-row");
souces.push(cheeseSouce,barbecueSouce,ketchup);
localStorage.setItem("souces", JSON.stringify(souces));
function showSoucesOnScreen() {
    const localSouces=JSON.parse(localStorage.getItem("souces"));
    for (let i = 0; i < localSouces.length; i++) {
        let souce=localSouces[i];
        showSouces(souce);
      
    }
}
function showSouces(souce) {
  rowSouce.innerHTML += `
      <div class="col-3 col3-souces">
            <div class="card souces-card" style="width: 18rem">
              <img
                src="${souce.souceImg}"
                class="card-img-top"
                alt="${souce.souceName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body souces-card-body">
                <h5 class="card-title">${souce.souceName}</h5>
                <p class="card-text"></p>
                <div class="souces-price">
                  <h5 class="price">${souce.soucePrice}</h5>
                  <i class="fa-solid fa-manat-sign"></i>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
  `
}
//Deserts
const honeyCake = new Deserts("Honey cake", 6.90, "./assets/deserts/images/balli-tort.png");
const meringue = new Deserts("Meringue", 6.90, "./assets/deserts/images/merenqa-tort.png");
const adds = new Deserts("Adds", 3.90, "./assets/deserts/images/ekler-tort.png");
const cheeseCake = new Deserts("Cheesecake San Sebastian", 7.90, "./assets/deserts/images/cizkeyk-tort.png");
const strawberryCream = new Deserts("Strawberry ice cream", 2.90, "./assets/deserts/images/ciyelekli-dondurma.jpg");
const chocokolateCream = new Deserts("Chocolate ice cream", 2.90, "./assets/deserts/images/sokaladli-dondurma.jpg");
//Adding deserts to page
const rowDesert = document.querySelector(".desert-row");
deserts.push(honeyCake,meringue,adds,cheeseCake,strawberryCream,chocokolateCream);
localStorage.setItem("deserts", JSON.stringify(deserts));
function showDesertsOnScreen() {
    const localDeserts=JSON.parse(localStorage.getItem("deserts"));
    for (let i = 0; i < localDeserts.length; i++) {
        let desert=localDeserts[i];
        showDeserts(desert);
      
    }
}
function showDeserts(desert) {
  rowDesert.innerHTML += `
   <div class="col-3 col3-desert">
            <div class="card desert-card" style="width: 18rem">
              <img
                src="${desert.desertImg}"
                class="card-img-top"
                alt="${desert.desertName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body desert-card-body">
                <h5 class="card-title">${desert.desertName}</h5>
                <p class="card-text"></p>
                <div class="desert-price">
                  <h5 class="price">${desert.desertPrice}</h5>
                  <i class="fa-solid fa-manat-sign"></i>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
  `
}
//drinks
const ayran = new Drinks("Ayran", 1.50, "0.2l","./assets/drinks/images/ayran.jpg");
const syrup = new Drinks("Syrup", 1.50, "0.5l", "./assets/drinks/images/sirab.jpg");
const cola = new Drinks("Coco-Cola", 3.00, "0.33l", "./assets/drinks/images/cola.jpg");
const fanta = new Drinks("Fanta", 3.00, "0.33l", "./assets/drinks/images/fanta.jpg");
const sprite = new Drinks("Sprite", 3.00, "0.33l", "./assets/drinks/images/sprite.jpg");
const fuseTea = new Drinks("Fuse tea", 3.00, "0.33l", "./assets/drinks/images/fuse-tea.jpg");
const granni = new Drinks("Fruit Juice Granini", 3.90, "0.25l", "./assets/drinks/images/granni.jpg");
const fruitJuice= new Drinks("Fruit Juice Grante",3.90,"0.25l","./assets/drinks/images/grante.png");
//Adding drinks to page
const rowDrinks = document.querySelector(".drink-row");
drinks.push(ayran,syrup,cola,fanta,sprite,fuseTea,granni,fruitJuice);
localStorage.setItem("drinks", JSON.stringify(drinks));
function showDrinksOnScreen() {
    const localDrinks=JSON.parse(localStorage.getItem("drinks"));
    for (let i = 0; i < localDrinks.length; i++) {
        let drink=localDrinks[i];
        showDrinks(drink);
      
    }
}
function showDrinks(drink) {
  rowDrinks.innerHTML += `
    <div class="col-3 col3-drink">
            <div class="card drink-card" style="width: 18rem">
              <img
                src="${drink.drinkImg}"
                class="card-img-top"
                alt="${drink.drinkName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body drink-card-body">
                <h5 class="card-title">${drink.drinkName}</h5>
                <p class="card-text"></p>
                <div class="drink-price">
                  <h5 class="price">${drink.drinkPrice}</h5>
                  <i class="fa-solid fa-manat-sign"></i>
                  <p class="drink-size">${drink.drinkSize}</p>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
  
  `
}
showCombosOnScreen();
showSaladOnScreen();
showCakesOnScreen();
showSoupOnScreen();
showSnacksOnScreen();
showSoucesOnScreen();
showDesertsOnScreen();
showDrinksOnScreen();


// Filters
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector(".search-btn");
const rowFilter = document.querySelector(".filter-row");
const main = document.querySelector("main");
const fltContainer = document.querySelector(".filter-container");
const section = document.querySelector(".filters");
searchBtn.addEventListener("click", search);
function search(){
  searchDrink();
  searchCombo();
}
function searchDrink() {
  let finder = drinks.find((drink) => {  
        if (drink.drinkName ===searchInput.value ) {
          return drink;
         }   
   })
  if (finder) {
    section.classList.add("drinks-menu");
    main.classList.add("d-none");
    rowFilter.classList.add("drink-row");
    fltContainer.classList.add("drink-container")
    rowFilter.innerHTML = "";
  rowFilter.innerHTML += `
    <div class="col-3 col3-drink">
            <div class="card drink-card" style="width: 18rem">
              <img
                src="${finder.drinkImg}"
                class="card-img-top"
                alt="${finder.drinkName}"
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body drink-card-body">
                <h5 class="card-title">${finder.drinkName}</h5>
                <p class="card-text"></p>
                <div class="drink-price">
                  <h5 class="price">${finder.drinkPrice}</h5>
                  <i class="fa-solid fa-manat-sign"></i>
                  <p class="drink-size">${finder.drinkSize}</p>
                </div>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div>
  
  ` 
  }   
}
function searchCombo() {
   let finder = combos.find((combo) => {  
        if (combo.comboName ===searchInput.value ) {
          return combo;
     }   
   })
  if (finder) {
    section.classList.add("combo-menu");
    main.classList.add("d-none");
    rowFilter.classList.add("combo-row");
    fltContainer.classList.add("combo-container")
    rowFilter.innerHTML = "";
  rowFilter.innerHTML += `<div class="col-3 col3-pizza">
            <div class="card combo-card" style="width: 18rem">
              <img
                src=${finder.sourceImg}
                class="card-img-top"
                alt=${finder.comboName}
              />
              <div class="icon-zoom">
                <i class="fa-solid fa-magnifying-glass zoom"></i>
              </div>
              <div class="card-body combo-card-body">
                <h5 class="card-title">${finder.comboName}</h5>
                <p class="card-text">
                  ${finder.comboIngredients}
                </p>
                <h5 class="price">${finder.comboPrice}</h5>
                <i class="fa-solid fa-manat-sign combo-icon"></i>
                <button type="button" class="btn choose-btn">Choose</button>
              </div>
            </div>
          </div> `
  }   

  
}
