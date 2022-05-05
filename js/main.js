
let designs = document.querySelectorAll(".design");
let close = document.querySelector(".close");
let exp_year = document.querySelector("#exp_year");

for(design of designs) {
  design.addEventListener("click", openModal);
  function openModal() {
    modal = this.children[3];
    modal.classList.toggle("block");
  }
}

function getYearsDiff(dt, dbd) {
	let yearsDiff = dt.getFullYear() - dbd.getFullYear();
	return yearsDiff;
}

function showExpYears() {
	let today = new Date();
	let beginDev = new Date("05 June 2018");
	let expYears = getYearsDiff(today, beginDev);	
	exp_year.innerHTML = expYears;
}

showExpYears();

console.log("-----------Demain c'est loin, notre futur c'est la seconde d'après - Youssoupha-----------------");
