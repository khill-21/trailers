const csvToJson = require('convert-csv-to-json');

let fileInputName = 'TrailerInventory2.tsv';
let fileOutputName = 'trailerInventory.json';

csvToJson.fieldDelimiter('\t').generateJsonFileFromCsv(fileInputName,fileOutputName);
