const myForm = document.querySelector("#my-form");
const manufacturerInput = document.querySelector("#manufacturer");
const modelInput = document.querySelector("#model");
const yearOfProductionInput = document.querySelector("#year");
const msg = document.querySelector(".msg");
const carList = document.querySelector("#cars");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (manufacturerInput.value === "" || modelInput === "" || yearOfProductionInput === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const car = {
      manufacturer: manufacturerInput.value,
      model: modelInput.value,
      year: yearOfProductionInput.value
    };
    if (localStorage.getItem("cars") === null) {
      let cars = [];
      cars.push(car);
      localStorage.setItem("cars", JSON.stringify(cars));
    } else {
      let cars = JSON.parse(localStorage.getItem("cars"));
      cars.push(car);
      localStorage.setItem("cars", JSON.stringify(cars));
    }
    console.log(manufacturer, `${manufacturerInput.value}`);
    console.log(model, `${modelInput.value}`);
    console.log(year, `${yearOfProductionInput.value}`);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${manufacturerInput.value} | ${modelInput.value} | ${yearOfProductionInput.value}`));
    carList.appendChild(li);
    manufacturerInput.value = "";
    modelInput.value = "";
    yearOfProductionInput.value = "";
  }
}