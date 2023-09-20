"use strict";
// Create a new list item when clicking on the "Add" button
const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", function () {
  const li = document.createElement("li");
  const inputValue = document.getElementById("title").value;
  const textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === "") {
    alert("You must write something");
  } else {
    document.querySelector(".main-list").appendChild(li);
  }
  document.getElementById("title").value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
});

// Create a "close" button and append it to each list item
const myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild = txt;
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "li") {
      ev.target.clasList.toggle("checked");
    }
  },
  false
);
