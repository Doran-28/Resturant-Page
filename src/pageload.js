

function loadPage(){
    const content = document.querySelector("div#content");
    const header = document.createElement("h4");
    const img = document.createElement("img");
    const text = document.createElement("p");
    header.textContent = "Welcome to our Resturant";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZWxF857wSQn-JXkXtibHxZpX4xmyj1p6tA&s";
    text.textContent = "This is a very cool resutrant, and you should come eat here.";

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(text);
}

export {loadPage};