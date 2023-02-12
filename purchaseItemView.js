import {PurchaseItem} from "./purchaseItem.js";
import {Eventhandler} from "./eventhandler.js";
import {Product} from "./product.js";

// ul itemsStore
const itemsStoreList = document.getElementById('itemsStore');
// const yourOrder = document.getElementById('order');
let container = document.querySelector(".container");
// displays the order on the webpage
let divOrder = document.createElement("h2");
const totalPrice = document.getElementById('total-price');
let mice = 'mice'
let letter = 's';

export class PurchaseItemView {
    // display the order here from the customer
     // this generates DOM elements
     static showItemsStore(productId, _id, newItem) {
        console.log(newItem);
        console.log(productId);
        console.log("yrPurchase here")
        // console.log(Eventhandler.displayName())
        PurchaseItem.itemsStore.forEach((product) => {
            console.log(product._id)
            console.log(product.product_id)
            console.log(Product._name)
            let itemDiv = document.createElement("div");
            
            divOrder.classList.add("order-id");
            
            //Total price of the basket purchase is output here using the ID totalPrice.
            // productId is outputting the name from this console.log(PurchaseItemView.showItemsStore(myProduct._name)); myProduct._name = productId
            // in the Eventhandler displayPurchases 

            
            // if(Product._id === product._product_id && 1 === product._quantity) {
            //     itemDiv.innerHTML = `This is the price £${product._costPrice} of your selected ${product._quantity} products: <b></b> ${productId}</b>`
            // } else if(Product._id === product._product_id && product._quantity >= 2) {
                    
            //         itemDiv.innerHTML = `This price is: <b>£${product._costPrice}</b> of your: <b>${product._quantity} ${productId}</b>`
            // } else {
            //     console.log("This is false")
            // }
            // console.log(totalPrice)
            divOrder.appendChild(itemDiv);
        })
        
        container.appendChild(divOrder);
    }

    static showProductView(productId, _name) { 
        const myProduct = Product.getProductById(productId);
        console.log(myProduct)
        let divItemPrice = document.createElement("div");
        console.log("Line 31")
        console.log(PurchaseItem.getTotalPurchasePrice()) 
        // productId look up here
        
        console.log(PurchaseItem.quantityOfPurchaseItem._quantity)
        // Total price of the basket purchase is output here using the ID totalPrice.
        totalPrice.innerHTML = `<b>£${PurchaseItem.getTotalPurchasePrice()}</b>`;
            
        totalPrice.appendChild(divItemPrice);
        container.appendChild(divItemPrice);
        console.log(PurchaseItem.getTotalPurchasePrice()) 
        // console.log(PurchaseItemView.showItemsStore(myProduct._name));
        return myProduct
    }
}





