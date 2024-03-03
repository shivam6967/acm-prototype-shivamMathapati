// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Changing the Districts



const dataSangli = document.querySelector('#sangli-data');
const dataAshta = document.querySelector('#ashta-data');

const selectValues = document.querySelector('#select-box');

selectValues.addEventListener('change' , (e)=>{
  let values = e.target.value;
 
  if(values === "sangliData"){
    dataSangli.style.display = "inline";
    dataAshta.style.display = "none";
  }
  if(values === "ashtaData"){
   
    dataSangli.style.display = "none";
    dataAshta.style.display = "inline";
  }
  
})

