let cars = document.querySelector('select[name="cars"]');
let radio = document.querySelectorAll('input[type="radio"]');
let chBx = document.querySelectorAll('input[id="checkbox"]');
let calculation = document.querySelector('input[value="Vypocet"]');
let chBxPro = document.querySelector('input[name="tuning"]');
let amount = document.querySelector(".castka");
let payment = document.querySelector('input[name="price"]');
let notification = document.querySelector(".vesel");
let send = document.querySelector('input[value="Odeslat"]');
let mail = document.querySelector('input[type="email"]');

calculation.addEventListener("click", function () {
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
  amount.textContent = `${price} Kč`;
  if (parseInt(payment.value) > price) {
    notification.style.color = "green";
    notification.textContent = "Vešel jste se";
  } else if (parseInt(payment.value) < price) {
    notification.style.color = "brown";
    notification.textContent = "Vaše finance jsou příliš nízké!";
  } else {
    notification.style.color = "red";
    notification.textContent = "Nezadali jse žádnou částku!";
  }
  send.disabled = false;
  send.addEventListener("click", function () {
    if (parseInt(payment.value) > price) {
      const regex = /@/;
      const validate = regex.test(mail.value);
      if (validate) {
        alert("pozadavky byly odeslany");
      } else {
        alert("Zadali jsem spatny email");
      }
    } else if (parseInt(payment.value) < price) {
      alert("Vaše částka nevyhovuje");
    } else {
      alert("Nebyla zadáná žádna částka");
    }
  });
});
