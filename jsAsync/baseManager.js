



async function getData(url) {

    let products = [];

    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            products = data;
        });

    let newProducts = products.splice(0, 5);

    return newProducts

}



 getData('https://northwind.vercel.app/api/products').then((productsdata) => {

    console.log(productsdata);

 })



