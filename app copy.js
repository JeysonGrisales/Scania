const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");


window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
        imgProduct = element.img
        nameProduct = element.name
        priceProduct = element.price
    }
  })
  createCard(nameProduct, imgProduct, priceProduct)
}

function loadSelect() {
  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
  });    
}

function createCard(nameProduct, imgProduct, priceProduct) {
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  const button = document.createElement("button")
  const button2 = document.createElement("button")
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  button.textContent = "Añadir al carrito"
  button2.textContent = "X"
  card.appendChild(button2);
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(button)
  main.appendChild(card);

  button2.classList.add("btn-del");
  card.classList.add("cardPrueba");
  button.classList.add("btn-add");
  imgCard.classList.add("img-card");
  
  button2.addEventListener("click", element => {main.removeChild (card)});
  button.addEventListener("click",agregar)
  templatecards.querySelector('.btn-add').dataset.id = element.id;


  function agregar(){
    let newArray = []
    newArray.push(title.textContent + ' ' + price.textContent)
    console.log(newArray);
  }
}


// products.map(element => { console.log(element.name) });


