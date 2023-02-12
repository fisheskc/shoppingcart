
import {Product} from "./product.js";


const purchaseBut = document.getElementById('purchase-button');
let userItemMessage = document.getElementById("purchase-item-message");
const container = document.querySelector(".container");
let olTag = document.createElement("ol");
olTag.setAttribute ('style', 'padding: 0; margin-left: 30px;');
olTag.setAttribute('id', 'theList');
const totalPrice = document.getElementById("total-price");

export class PurchaseItem {
    static itemsStore = Array()
    static order_id = 0;
    static costPrice = 0;
    constructor(product_id, quantity, id=0) {
        this._id = id;
        // product_id comes from Product catalogue
        this.product_id = product_id;
        this._quantity = quantity;
        this._costPrice = this.getCostPrice();
        this.order_id = 1
        // this._newQuantity = PurchaseItem.getNewQuantity();
    }

    getId() {
        return this._id 
    }
   
    getQuantity() {
        return this._quantity
    }

    static defineItem(product_id, quantity, id=0, order_id) {
        if(id == 0) {
           id = PurchaseItem.itemsStore.length + 1;
        }
        let newPurchaseItem = new PurchaseItem(product_id, quantity, id)
        
        PurchaseItem.itemsStore.push(newPurchaseItem);
        return newPurchaseItem;
    }

    // item cost of product ordered eg 2 products of the same value: 2 mice X quantity
    getCostPrice() {
        // taken from static getProductById(id)
        const product = Product.getProductById(this.product_id)
        console.log(product)
        // taken from Product.getProductById(id), the product variable on line 58
            let costPrice = product._price * this._quantity;
            // increments on order of an item placed
            this.order_id++;
            console.log(costPrice)
            return costPrice 
    }

    // PurchaseItem.defineItem creates the purchaseItem
    // else statement - now takes the total basket price
    static quantityOfPurchaseItem(productId, quantity) {
        let purchaseItem = PurchaseItem.getPurchaseItemByProductId(productId)
        console.log(purchaseItem)
        console.log(PurchaseItem.itemsStore)
        if(purchaseItem === undefined) {
            purchaseItem = PurchaseItem.defineItem(productId, quantity)

        } else {
            purchaseItem._quantity = quantity
            purchaseItem._costPrice = PurchaseItem.getTotalPurchasePrice(purchaseItem._costPrice)
        }
        
        console.log(PurchaseItem.getTotalPurchasePrice(purchaseItem._costPrice))
        console.log(purchaseItem)
        console.log(purchaseItem.getQuantity())
        return purchaseItem
    }

    static getPurchaseItemByProductId(productId) {
        let productItemFound = PurchaseItem.itemsStore.find(product => product.product_id == productId)
        console.log(productItemFound)
        return productItemFound 
    }   

    // total of all the shopping cart items here
    static getTotalPurchasePrice() {
        console.log("basket price: ") 
        console.log(PurchaseItem.itemsStore)  
        let purchaseResult = PurchaseItem.itemsStore.reduce((total, purchaseItem) => {
        console.log("purchaseItem: ")  
        console.log(purchaseItem)
        console.log(purchaseItem._costPrice)  
        return total + purchaseItem._costPrice
        },0)
        return purchaseResult
    }
} 