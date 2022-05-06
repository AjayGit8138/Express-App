import { patientdata } from './postconnection';
const fs = require('fs');

// STEP 1: Load JSON file
const users = require('./patientlog.json');
console.log(patientdata);
// Defining new user
let patient = {
  
};

patient.push(patientdata);

fs.writeFile('patientlog.json', JSON.stringify(users), (err) => {
    // Checking for errors
    if (err) throw err;
  
    console.log('Done writing'); // Success
  });