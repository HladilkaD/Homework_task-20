const categories = [
    { name: "Phones",
      categoryId: "Phones",
      data: [{name : "Iphone 12", fullName: "Apple iPhone 12",price: "32 499 uah.", color: "gold"},
            {name : "Samsung S20", fullName: "Samsung S20",price: "18 999 uah.", color: "grey"},
            {name : "Motorola G22", fullName: "Motorola G22 4/128G",price: "5 999 uah.", color: "silver"},]
    },
    {
    name: "TV",
     categoryId: "TV",
      data: [{name: "LG", fullName: "LG 43UQ80006LB",price: "17 999 uah.", color: "green"},
            {name: "Samsung Curved", fullName: "Samsung QE55Q60BAUXUA",price: "32 999 uah.", color: "white"},
            {name: "Sony", fullName: "Sony KD55X81KR",price: "36 999 uah.", color: "black"},]
    },
    {
    name: "Cars",
     categoryId: "Cars",
      data: [{name: "Tesla Model S", fullName: "Tesla Model S 75D",price: "42 200 $", color: "white"},
            {name: "BMW X6", fullName: "BMW X6 35i Steptronic",price: "38 800 $", color: "black"},
            {name: "Ford Focus", fullName: "Ford Focus 1.6 TDCi",price: "6 550 $", color: "silver"},]
    },
    {
        name: "Laptops",
         categoryId: "Laptops",
          data: [{name: "Acer Nitro 5", fullName: "Acer Nitro 5",price: "49 999 uah.", color: "shale black"},
                {name: "Asus ROG Strix", fullName: "Asus ROG Strix G15",price: "39 999 uah.", color: "black"},
                {name: "Apple MacBook Air", fullName: "Apple MacBook Air",price: "58 999 uah.", color: "silver"},
                {name: "Lenovo IdeaPad", fullName: "Lenovo IdeaPad 13",price: "18 999 uah.", color: "silver"},]
        },
];

const renderCategoriesRepeater = categories.map((category) => {
    return `<li data-src=${category.categoryId}>${category.name}</li>`
}).join('');

const categoriesTemplate = `<div class="categories-container">
            <h3>Categories</h3>
            <ol>
                ${renderCategoriesRepeater}
            </ol>
        </div>`;


const getProductsByCategory = (categoryId) => categories.find(category => category.categoryId === categoryId).data;

const productsTemplate = (categoryId) => {
    const productItems = getProductsByCategory(categoryId).map(product => {
        return `<li data-src=${product.name}>${product.name}</li>`
    }).join('');

    return `<div class="products-container">
        <h3>${categoryId}</h3>
        <ol>
            ${productItems}
        </ol>
    </div>`
    
};

const cleanContainers = () => {
    productsContainer.innerHTML = '';
    productDescriptionContainer.innerHTML = '';
};

const handleClickBuy = ()=>{
    cleanContainers();
    alert('Success');
};



const getDescriptionTemplate = (product) => `<div class="categories-container">
<h3>  ${product.name}</h3>
    <ol >
    <li> Product name: ${product.fullName}</li>
    <li> Product price: ${product.price}</li>
    <li> Product color: ${product.color}</li>
    </ol>
    <button id="buy_now">Buy now</button>
</div>`;


let selectedCategory = '';

const categoriesContainer = document.querySelector(".container .categories");

const productsContainer = document.querySelector(".container .products");
const productDescriptionContainer = document.querySelector(".container .description")

categoriesContainer.innerHTML = categoriesTemplate;

const renderProductsList = (event) => {
    selectedCategory = event.target.dataset.src;
    if (selectedCategory) {
        const productsList = productsTemplate(selectedCategory);
        cleanContainers();
        productsContainer.innerHTML = productsList;
    }
}

const renderProductDescription = (event) => {
    
    const selectedProductName = event.target.dataset.src;
    const products = getProductsByCategory(selectedCategory);
    const selectedProduct = products.find(product => product.name.includes(selectedProductName))
    console.log(products);
    console.log(selectedProductName)
    console.log(selectedProduct);

    productDescriptionContainer.innerHTML = getDescriptionTemplate(selectedProduct);
    document.getElementById('buy_now').addEventListener('click',handleClickBuy);
}

const categoryClickHandler = categoriesContainer.addEventListener("click", renderProductsList);
const productsClickHandler = productsContainer.addEventListener("click", renderProductDescription);

