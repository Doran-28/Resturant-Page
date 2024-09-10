
function displayLinks(){
    const content = document.querySelector("div#content");
    const header = document.createElement("h4");
    const text = document.createElement("p");
    const list = document.createElement("ul");
    header.textContent = "About us";
    text.textContent = "We are a very nice team here at this resutrant with top notch customer service and exellent chefs.";

    const links = ["instagram", "facebook", "snapchat", "X"];

    links.forEach(element => {
        const li = document.createElement('li');
        let link = document.createElement('a');
        link.href = "."
        link.textContent = element;
        li.appendChild(link);
        list.appendChild(li);
    });

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(text);
    content.appendChild(list);
}

export {displayLinks}