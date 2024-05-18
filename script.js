let cars = document.querySelector('select[name="cars"]');
let radio = document.querySelectorAll('input[type="radio"]');
let chBx = document.querySelectorAll('input[id="checkbox"]');
let vypocet = document.querySelector('input[value="Vypocet"]');
let chBxPro = document.querySelector('input[name="tuning"]');
let castka = document.querySelector(".castka");
let platba = document.querySelector('input[name="price"]');
let oznameni = document.querySelector(".vesel");
let send = document.querySelector('input[value="Odeslat"]');
let mail = document.querySelector('input[type="email"]');

vypocet.addEventListener("click", function () {
  let price = parseInt(cars.value);
  let tuning = price;
  if (chBxPro.checked) {
    tuning = tuning * chBxPro.value - price;
  } else {
    tuning = tuning - price;
  }
  for (const item of radio) {
    if (item.checked) {
      price = price * item.value;
    }
  }
  price += tuning;
  for (const item of chBx) {
    if (item.checked) {
      price = price + parseInt(item.value);
    }
  }
  castka.textContent = `${price} Kč`;
  if (parseInt(platba.value) > price) {
    oznameni.style.color = "green";
    oznameni.textContent = "Vešel jste se";
  } else {
    oznameni.style.color = "red";
    oznameni.textContent = "Nevešel jste se";
  }
});
send.addEventListener("click", function () {
  const regex = /@/;
  const validate = regex.test(mail.value);
  if (validate) {
    alert("pozadavky byly odeslany");
  } else {
    alert("Zadali jsem spatny email");
  }
});
