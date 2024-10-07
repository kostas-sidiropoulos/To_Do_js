const inputBox = document.getElementById("inpBox");
const listCont = document.getElementById("liCont");


function addTask() {
    if(inputBox.value === ''){
        alert("you must write something!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#9746";
        li.appendChild(span);
    }
    inputBox.value='';
}

listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);