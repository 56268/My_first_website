const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Mozilla_Firefox_logo_2013.svg.webp") {
    myImage.setAttribute("src", "images/pensive.webp");
  } else {
    myImage.setAttribute("src", "images/Mozilla_Firefox_logo_2013.svg.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please input your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mizilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mizilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
