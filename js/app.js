fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountry(data))

const displayCountry = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.id = country.name.common;
        const countryContent =`
            <h3 class="country-name">${country.name.common}</h3>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name.common}','${country.name.common}')" class="country-details">Details</button>
        `;
        countryDiv.innerHTML = countryContent;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetails = (name, id) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryInfo(data[0], id));
}

const countryInfo = (country, id) => {
    const countryParentDiv = document.getElementById(id);
    const countryDetails = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <p>Timezone: ${country.timezones}</p>
        <p>Continents: ${country.continents}</p>
        <img id="flags" src="${country.flags.png}">
    `
    countryParentDiv.innerHTML = countryDetails;
}