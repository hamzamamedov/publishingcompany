let dropdown = document.querySelector(".dropdown");
let fabars = document.querySelector(".fa-bars");
let faxmark = document.querySelector(".fa-xmark");

function openbar() {
  dropdown.classList.add("visiblee");
  fabars.style.display = "none";
  faxmark.style.display = "block";
}
function closebar() {
  dropdown.classList.remove("visiblee");
  fabars.style.display = "block";
  faxmark.style.display = "none";

}

// ! js lesson 1 >>>>>>
{
  let a = 5;
  let b = 6;
  console.log(++a + "," + --b);
}

{
  let a = 5;
  let b = 6;
  let k = ++a + "," + --b;
  console.log(k);
}
