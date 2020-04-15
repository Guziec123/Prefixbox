window.addEventListener('DOMContentLoaded', () => {

    let productsData = document.getElementsByClassName("product-data");
    let productName = document.getElementsByClassName("product-name");
    let productPrice = document.getElementsByClassName("product-price")


    let beton = productName[1];
    let konyhabutor = productName[2];
    let products = [];


    function showAlert() {

        products.push(beton.innerHTML, konyhabutor.innerHTML)

        for (let i = 0; productName.length > i; i++) {
            
            productName[i].addEventListener("click", () => {
            
                if(productName[i].innerHTML!= konyhabutor.innerHTML  ){  
                    alert(`This page says:\n\nProduct name: ${productName[i].innerHTML} \nProduct ID: ${productsData[i].attributes[1].value} \nPrice: ${productPrice[i].innerHTML}`)
                }
                
                if(productName[i].innerHTML == products[1]){
                    beton.innerHTML = products[1]
                    konyhabutor.innerHTML = products[0];
                    }
                else{
                    beton.innerHTML = products[0]
                    konyhabutor.innerHTML = products[1];
                }
 
            });
        };
    }
    showAlert()
    

});