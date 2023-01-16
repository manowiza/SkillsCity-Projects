let cart_number_session = sessionStorage.getItem("cart-number");

if(!cart_number_session){
    sessionStorage.setItem("cart-number", 0);
}



const  run = function () {
    let cart = document.getElementById("lblCartCount")
    cart_number_session = sessionStorage.getItem("cart-number")
    cart.innerText = Number(cart_number_session);

    const updateCartNumber = function(){
        cart_number_session = sessionStorage.getItem("cart-number")
        var newNumber = Number(cart_number_session) + 1;
        sessionStorage.setItem("cart-number", newNumber)
        cart.innerText = newNumber;
        
        }

    let addToCarts = document.getElementsByClassName("add-to-cart-btn")

    for (let index = 0; index < addToCarts.length; index++) {
        addToCarts[index].addEventListener("click", updateCartNumber);
        
    }

}

run();