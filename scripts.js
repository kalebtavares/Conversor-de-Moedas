const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-value").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.0;
  const euroToday = 6.2;
  const btcToday = 134.000;
  const libraToday = 7.3;

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GPB",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value === "btc") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue / btcToday);
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/image/estados-unidos.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/image/euro.png";
  }

  if (currencySelect.value == "btc") {
    currencyName.innerHTML = "Biticoin";
    currencyImg.src = "./assets/image/bitcoin.png";
  }

if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/image/libra.png";
  }


}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
