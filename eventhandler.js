// MVC Project
// modal - the data
// view - the gui you see, webpage
// controller - eventhandler, clicked links/buttons etc

import {Product} from "./product.js";
import {PurchaseItem} from "./purchaseItem.js";
import {PurchaseItemView} from "./purchaseItemView.js";
// import {Checkout} from "./checkout.js";
const catalogueList = document.getElementById('catalogue');
const totalPrice = document.getElementById('total-price');
const order = document.getElementById('order');
let container = document.querySelector(".container");
let mice = 'mice'
let letter = 's';

export class Eventhandler {
    // click handler here
    static quantityInput(event) {

        console.log("input changed");
        console.log(event.target.parentNode);
        console.log(event.currentTarget);

        let productId = Number(event.target.parentNode.getAttribute("data-product-id"));
        let quantityValue = Number(event.currentTarget.value);
        let purchaseValue = PurchaseItem.quantityOfPurchaseItem(productId, quantityValue)
        //  PurchaseItem quantityValue passed to PurchaseItemView
        
         // finds the original id from the store
         const myProduct = Product.getProductById(productId);
         // creates a new PurchaseItem object here
         let newItem = new PurchaseItem(productId, quantityValue, myProduct)
         let purchaseId = newItem.getId(productId)     
        
        console.log(PurchaseItemView.showProductView(myProduct, newItem))
        
        console.log(purchaseValue) 
        return purchaseValue
    }


    // clicks the li product
    static productClicked(event) {
        console.log("clicked");
        console.log(event.target.parentNode);
        console.log(event.currentTarget);
        // takes the users input here
        let productId = event.currentTarget.getAttribute("data-product-id")
        // purchaseItem needs connecting here
        let product = Product.getProductById(productId)
        console.log(product);
        return product;
    }
   
}
