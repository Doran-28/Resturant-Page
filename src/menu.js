
function displayMenu(){
    const content = document.querySelector("div#content");
    const header = document.createElement("h4");
    const list = document.createElement("ul");
    header.textContent = "This is our pizza menu";
    
    const pizzaVariants = ['Margherita', 'Pepperoni', 'Hawaiian', 'BBQ Chicken', 'Veggie'];
    pizzaVariants.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element
        list.appendChild(li);
    });

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(list);
}

export { displayMenu }