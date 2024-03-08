const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectDe = document.querySelector(".currency-select-de")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.93
    const euroToday = 5.43
    const libraToday = 6.37
    const bitcoinToday = 335050.05

    // ----------------------------REAL----------------------------- //
    if (currencySelectDe.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "real" && currencySelectDe.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "real" && currencySelectDe.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelect.value === "real" && currencySelectDe.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelect.value === "real" && currencySelectDe.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelect.value === "real" && currencySelectDe.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    // ----------------------------DOLAR----------------------------- //
    if (currencySelectDe.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectDe.value === "dolar" && currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "dolar" && currencySelectDe.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value === "dolar" && currencySelectDe.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.09)
    }

    if (currencySelect.value === "dolar" && currencySelectDe.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.28)
    }

    if (currencySelect.value === "dolar" && currencySelectDe.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 67576.30)
    }


    // ----------------------------EURO----------------------------- //
    if (currencySelectDe.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "euro" && currencySelectDe.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "euro" && currencySelectDe.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value === "euro" && currencySelectDe.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.91)
    }

    if (currencySelect.value === "euro" && currencySelectDe.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.17)
    }

    if (currencySelect.value === "euro" && currencySelectDe.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 61864.89)
    }

    // ----------------------------LIBRA----------------------------- //
    if (currencySelectDe.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "libra" && currencySelectDe.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "libra" && currencySelectDe.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value === "libra" && currencySelectDe.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.78)
    }

    if (currencySelect.value === "libra" && currencySelectDe.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.85)
    }

    if (currencySelect.value === "libra" && currencySelectDe.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 52687.63)
    }

    // ----------------------------BITCOIN----------------------------- //
    if (currencySelectDe.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "bitcoin" && currencySelectDe.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value === "bitcoin" && currencySelectDe.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value === "bitcoin" && currencySelectDe.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / 67509)
    }

    if (currencySelect.value === "bitcoin" && currencySelectDe.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / 61752.51)
    }

    if (currencySelect.value === "bitcoin" && currencySelectDe.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / 52606.05)
    }

}

//-------------------------PRIMEIRA PARTE IMAGE----------------------//
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

//-------------------------SEGUNDA PARTE IMAGE----------------------//
function changeCurrencyOne() {
    const currencyNameOne = document.getElementById("currency-name-one")
    const currencyImageOne = document.getElementById("currency-image-one")

    if (currencySelectDe.value == "dolar") {
        currencyNameOne.innerHTML = "Dólar Americano"
        currencyImageOne.src = "./assets/dolar.png"
    }

    if (currencySelectDe.value == "real") {
        currencyNameOne.innerHTML = "Real"
        currencyImageOne.src = "./assets/real.png"
    }

    if (currencySelectDe.value == "euro") {
        currencyNameOne.innerHTML = "Euro"
        currencyImageOne.src = "./assets/euro.png"
    }

    if (currencySelectDe.value == "libra") {
        currencyNameOne.innerHTML = "Libra"
        currencyImageOne.src = "./assets/libra.png"
    }


    if (currencySelectDe.value == "bitcoin") {
        currencyNameOne.innerHTML = "Bitcoin"
        currencyImageOne.src = "./assets/bitcoin.png"
    }

    convertValues()
}

//---------------------------EVENTOS------------------------//
currencySelect.addEventListener("change", changeCurrency)
currencySelectDe.addEventListener("change", changeCurrencyOne)
convertButton.addEventListener("click", convertValues)
//---------------------------EVENTOS------------------------//