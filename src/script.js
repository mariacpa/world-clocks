function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");
    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = `${chicagoTime.format(
      "h:mm:ss"
    )} <small>${chicagoTime.format("A")}</small>`;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss"
    )} <small>${parisTime.format("A")}</small>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "local") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="cities">
          <div>
            <h2>${cityName[1]}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small></div>
          </div>
        </div>`;
}

let citySelected = document.querySelector("#city");
citySelected.addEventListener("change", updateCity);
