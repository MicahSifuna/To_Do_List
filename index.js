// creating a new list item when clicking on the add button
function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("myinput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue ==="") {
        alert("You must write something!");
    } else {
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("myinput").value = "";

    // add close button to every new item added to the list

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
        for(i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
}
// create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let a;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// adding a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener("click",
 function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
 },
    false
);
