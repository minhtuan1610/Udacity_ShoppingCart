/*
  Create an array named products which you will use to add all of your product object literals that you create in the next step.
  Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {
    name: "cherry",
    price: 2,
    quantity: 0,
    productId: 1,
    image: "../images/cherry.jpg",
  },
  {
    name: "orange",
    price: 3.3,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg",
  },
  {
    name: "strawberry",
    price: 1.95,
    quantity: 0,
    productId: 3,
    image: "../images/strawberry.jpg",
  },
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let pickedProduct = getProductById(productId);

  if (!cart.includes(pickedProduct)) {
    pickedProduct.quantity = 1;
    cart.push(pickedProduct);
  } else {
    pickedProduct.quantity += 1;
  }
}

function getProductById(productId) {
  return products.find((p) => p.productId === productId);
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
  @param productId the unique Id of product in the cart
  @returns the quantity of product is increased 1 unit
*/
function increaseQuantity(productId) {
  let increasedProduct = cart.find((p) => p.productId === productId);
  return (increasedProduct.quantity += 1);
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let decreasedProduct = cart.find((p) => p.productId === productId);
  decreasedProduct.quantity -= 1;
  if (decreasedProduct.quantity == 0) {
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let removeProduct = cart.find((p) => p.productId === productId);
  removeProduct.quantity = 0;
  cart.splice(cart.indexOf(removeProduct), 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
  @param no parameter
  @return the amount that the customer must pay
*/
function cartTotal() {
  let grandTotal = 0;
  cart.forEach((e) => {
    grandTotal += e.price * e.quantity;
  });
  return grandTotal;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.forEach((e) => {
    e.quantity = 0;
  });
  cart.splice(0);
  totalPaid = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(receivedCash) {
  totalPaid += receivedCash;
  const remainingAmount = totalPaid - cartTotal();
  if (remainingAmount >= 0) {
    emptyCart();
    totalPaid = 0;
  }
  return remainingAmount;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
