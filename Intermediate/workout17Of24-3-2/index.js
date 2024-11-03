let d = document;
let countrySelectBox = d.querySelector(".countrySelect");
let citySelect = d.querySelector(".citySelect");

let countriesData = {
  Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
  US: ["Los Angles", "San Diego", "Chicago"],
};

countrySelectBox.addEventListener("change", () => {
  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City ...</option>";
  } else {
    let maincountrySelect = countrySelectBox.value;
    let maincountrycity = countriesData[maincountrySelect];

    citySelect.innerHTML = "";

    maincountrycity.forEach((city) => {
      citySelect.innerHTML += `<option>${city}</option>`;
    });
  }
}); 
