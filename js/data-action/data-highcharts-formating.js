import fs from 'fs';
import { raw } from '../data/data-raw.js';

//Format the data to comply with highcharts treegraph specification
const subsidiaries = raw.results;
let result = [];

subsidiaries.forEach((element) => {
  let newEelement = [Object.values(element)[0], Object.values(element)[1]];
  result.push(newEelement);
});


//Put the formated data in a dedicated file
fs.writeFile("../data/data-highcharts.js", "let data =", (error) => {
  if (error) throw error;
});

fs.appendFile("../data/data-highcharts.js", JSON.stringify(result, null, 2), (err) => { if (err) 
  throw err;
}
);

fs.appendFile("../data/data-highcharts.js", ";export default data;", (err) => { if (err) 
  throw err;
}
);