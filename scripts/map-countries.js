const countries = require('./countries.json');
const fs = require('fs');
const path = require('path');

function mapCountryCZ(c) {
  return { [c.cca3]: c.translations.ces };
}

function mapCountryEN(c) {
  return { [c.cca3]: { common: c.name.common, official: c.name.official } };
}

function mapCountryCZ2(c) {
  return { [c.cca2]: c.translations.ces };
}

function mapCountryEN2(c) {
  return { [c.cca2]: { common: c.name.common, official: c.name.official } };
}

const csJSON = JSON.stringify(countries.map(mapCountryCZ), null, '\t');
const enJSON = JSON.stringify(countries.map(mapCountryEN), null, '\t');
const csJSON2 = JSON.stringify(countries.map(mapCountryCZ2), null, '\t');
const enJSON2 = JSON.stringify(countries.map(mapCountryEN2), null, '\t');

fs.writeFileSync(path.join(__dirname, '..', '/src/countries/cs-CZ.json'), csJSON, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', '/src/countries/en-US.json'), enJSON, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', '/src/countries/cs-CZ2.json'), csJSON2, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', '/src/countries/en-US2.json'), enJSON2, 'utf8');
