//remove the element
let remotodo=document.querySelector(".items");
remotodo.addEventListener("click",function(e){
    if(e.target.type==="checkbox"){
        e.target.classList.toggle("checked");
    }
    let remo=document.querySelector(".checked");
    remo.parentNode.remove();
})

//add the element
let add=document.querySelector(".add");

add.addEventListener("click",function(e){
    
    let work=prompt("please input your work");
    // 2. Create a new div element with class "item"
    const divElement = document.createElement("div");
    divElement.className = "item";

    // 3. Create an input element with the specified attributes
    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.className = "Music";
    inputElement.name = "music";
    inputElement.value = "music";

    // 4. Create a label element and set its text content to "Music"
    const labelElement = document.createElement("label");
    labelElement.innerText=work;

    // 5. Append the input and label elements as children to the div element
    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);

    // 6. Append the div element as a child to the parent element
    remotodo.appendChild(divElement);
})

//remove all the element
let reall=document.querySelectorAll(".item");
let clearr=document.querySelector(".clear");
clearr.addEventListener("click",function(){
    reall.forEach(a=>a.remove());
})