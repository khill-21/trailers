/*
For each object in the Array;
  For each key-value pair in the object;
    Create a new entry: key = "Attribute [i] name", value = parent key;
    Create a new entry: key = "Attribute [i] value(s)", value = parent value;
    Create a new entry: key = "Attribute [i] visible", value = 1;
    Create a new entry: key = "Attribute [i] global", value = 1;
*/

var objectArray = [
 {
  "ModelName": "30SA-8",
  "BaseModelName": "30SA",
  "MSRP": "1150",
  "SalePrice": "1150",
  "Weight": "850",
  "Description": "5’ x 8’ Single Axle",
  "DealerComments": "This trailer is 8 foot long",
  "Categories": "Utility Trailer, Light Duty",
  "Year": "2019",
  "Make": "DV Manufacturing",
  "ExteriorColor": "Black",
  "BaseDescription": "",
  "AxleConfiguration": "Single",
  "HitchType": "2\" Ball",
  "OpenEnclosed": "Open",
  "GVWR": "2995",
  "GAWR": "3500",
  "Coupler": "2\" A-Frame",
  "SafetyChains": "1/4\" Grd. 43",
  "Jack": "2K Top Wind (Bolt On)",
  "Tongue": "3\" Channel",
  "TopRail": "1\"x2\" Tube",
  "Frame": "2\"x3\" Angle",
  "Crossmembers": "2\"x3\" Angle",
  "Uprights": "2\" x 2\"Angle",
  "Fenders": "9\" x 32\" Rolled Formed w/ Back",
  "Axles": "3500lb Dexter Cambered Axle",
  "Suspension": "Multi-Leaf Spring",
  "Tire": "205/75R15 Radial Tires",
  "Wheel": "15x5 Gray Spoke (5on5)",
  "Floor": "2\" Douglas Fir (or equal)",
  "Lights": "DOT Stop, Tail, Turn, & Clearance",
  "ElectricalPlug": "4-Way Flat",
  "FinishPrep": "Primed",
  "Finish": "Automotive Grade Enamel Paint",
  "StandardFeatures": "LED Lights, 2 year warranty;NATM Certified",
  "AvailableOptions": "4’ Expanded Metal Rampgate, Electric Brakes, Swing Away Jack, Spare Tire, A-Frame Box, Gas Can Holder"
 },
 {
  "ModelName": "30SA-10",
  "BaseModelName": "30SA",
  "MSRP": "1195",
  "SalePrice": "1195",
  "Weight": "875",
  "Description": "5’ x 10’ Single Axle",
  "DealerComments": "This trailer is 10 foot long",
  "Categories": "Utility Trailer, Light Duty",
  "Year": "2019",
  "Make": "DV Manufacturing",
  "ExteriorColor": "Black",
  "BaseDescription": "",
  "AxleConfiguration": "Single",
  "HitchType": "2\" Ball",
  "OpenEnclosed": "Open",
  "GVWR": "2995",
  "GAWR": "3500",
  "Coupler": "2\" A-Frame",
  "SafetyChains": "1/4\" Grd. 43",
  "Jack": "2K Top Wind (Bolt On)",
  "Tongue": "3\" Channel",
  "TopRail": "1\"x2\" Tube",
  "Frame": "2\"x3\" Angle",
  "Crossmembers": "2\"x3\" Angle",
  "Uprights": "2\" x 2\"Angle",
  "Fenders": "9\" x 32\" Rolled Formed w/ Back",
  "Axles": "3500lb Dexter Cambered Axle",
  "Suspension": "Multi-Leaf Spring",
  "Tire": "205/75R15 Radial Tires",
  "Wheel": "15x5 Gray Spoke (5on5)",
  "Floor": "2\" Douglas Fir (or equal)",
  "Lights": "DOT Stop, Tail, Turn, & Clearance",
  "ElectricalPlug": "4-Way Flat",
  "FinishPrep": "Primed",
  "Finish": "Automotive Grade Enamel Paint",
  "StandardFeatures": "LED Lights, 2 year warranty;NATM Certified",
  "AvailableOptions": "4’ Expanded Metal Rampgate, Electric Brakes, Swing Away Jack, Spare Tire, A-Frame Box, Gas Can Holder"
 }
]

for (var i = 0; i < objectArray.length; i++) {
  const currentObj = objectArray[i];

  for (var key in currentObj) {
    if (currentObj.hasOwnProperty(key) && key.includes('ModelName')) {
      var val = currentObj[key];
      currentObj[`Attribute ${i} name`] = `${key}`;
      currentObj[`Attribute ${i} value(s)`] = `${val}`;
      // console.log(`${key} ${i} =  ${val}`);
      // console.log(currentObj);
    }
  }
console.log(currentObj);
}




// const fs = require('fs');
// const originalInventory = fs.readFileSync('short_trailer.json');
// const parsedInventory = JSON.parse(originalInventory);
// for (var i = 0; i < parsedInventory.length; i++) {
//   const currentObj = parsedInventory[i];
//
//   for (var key in currentObj) {
//     if (currentObj.hasOwnProperty(key) && key === 'ModelName') {
//       var val = currentObj[key];
//       currentObj[`Attribute ${i} name`] = `${key}`;
//       currentObj[`Attribute ${i} value(s)`] = `${val}`;
//       // console.log(`${key} ${i} =  ${val}`);
//       console.log(currentObj);
//     }
//   }
// }
