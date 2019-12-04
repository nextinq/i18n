const countries = require('./countries.json');
const fs = require('fs');
const path = require('path');


function mapCountryCZ(c) {
  return { [c.cca3]: c.translations.ces }
}

function mapCountryEN(c) {
  return { [c.cca3]: { common: c.name.common, official: c.name.official } };
}


const csJSON = JSON.stringify(countries.map(mapCountryCZ), null, '\t');
const enJSON = JSON.stringify(countries.map(mapCountryEN), null, '\t');

fs.writeFileSync(path.join(__dirname, '..', '/src/countries/cs-CZ.json'), csJSON, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', '/src/countries/en-US.json'), enJSON, 'utf8');
