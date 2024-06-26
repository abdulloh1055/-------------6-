let body  = document.querySelector("body")

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    let results = data.results; //array
    let user = results[0]; //objekt

    let box = document.createElement("div");
    let name = document.createElement("h2");
    let list = document.createElement("ul");
    let phone = document.createElement("li");
    let emali = document.createElement("li");
    let addres = document.createElement("li");  
    let image = document.createElement("img");

    image.classList.add("img");
    box.classList.add("img")

    
        image.src = user.picture.large
    name.textContent =  `${user.name.first}  ${user.name.last}`;
    phone.textContent = user.phone;
    emali.textContent = user.emali;
    addres.textContent = user.location.country;

    list.appendChild(phone);
    list.appendChild(emali);
    list.appendChild(addres);

    box.appendChild(image);
    box.appendChild(name);
    box.appendChild(list);

    body.appendChild(box)

});
