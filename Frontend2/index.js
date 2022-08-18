function submit () {
    var div = document.getElementById('menurow');
    var img = document.createElement('img');
    var newDiv = document.createElement('div');
    let newDivtwo = document.createElement('div');
    var heading = document.createElement('h1');
    var meal = document.getElementById('Meal').value;
    var cost = document.getElementById('price').value;
    var comment = document.createElement('p');
    var price = document.createElement('h2');
    var btn = document.createElement('button')

    newDivtwo.classList.add('alt');
    heading.innerHTML = meal;
    price.innerHTML = cost;
    img.src = "Image/Image5.png"
    btn.innerHTML = "Delete"

    
    newDiv.appendChild(img);
    console.log(newDiv);
    newDivtwo.appendChild(heading);
    newDivtwo.appendChild(price);
    console.log(newDivtwo);
    newDivtwo.appendChild(btn);
    newDiv.appendChild(newDivtwo);
    console.log(newDiv);
    

    div.appendChild(newDiv);
    console.log(div);
    

   

}


