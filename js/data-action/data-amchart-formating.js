import fs from 'fs';
import { raw } from '../data/data-raw.js';

//get only the list of subsidiaries
const subsidiaries = raw.results;

//tree to be progressively built
const noChildren = [];

let isParent = false;
let theParent = {};
let n = 0;

while (n < 7) {
//while (Object.keys(results).length > 1 & n < Object.keys(raw.results).length) {
  n++;
  //build the tree from the botom adding each time subsidiaries without children
  //take one subsidiary after another
  for (let i = 0; i < Object.keys(subsidiaries).length; i++) {
    isParent = false;
    //browse the list to check if it is a parent of another subsidiary in the list
    for (let j = 0; j < Object.keys(subsidiaries).length; j++) {
      if (subsidiaries[i].perimetre_juridique_raison_sociale == subsidiaries[j].societe_parente ){
        isParent = true;
        //break loop
      };
    };
    if (isParent == false) {
      //if the subsidiary has no children in the list it is added as a children parameter to his parent and removed form the list
      theParent = subsidiaries.find(o => o.perimetre_juridique_raison_sociale == subsidiaries[i].societe_parente);
      if (subsidiaries[i].children != null) {
        if ("children" in theParent){
          theParent.children.push({
            'name' : subsidiaries[i].perimetre_juridique_raison_sociale,
            'children' : subsidiaries[i].children
          })
        } else {
          theParent.children = [{
            'name' : subsidiaries[i].perimetre_juridique_raison_sociale,
            'children' : subsidiaries[i].children
          }]
        };
      } else {
        if ("children" in theParent){
          theParent.children.push({
            'name' : subsidiaries[i].perimetre_juridique_raison_sociale,
            'children' : null
          })
        } else {
          theParent.children = [{
            'name' : subsidiaries[i].perimetre_juridique_raison_sociale,
            'children' : null
          }]
        };
      };
      subsidiaries.splice(i, 1);
    };
  };
};

console.log(subsidiaries);
console.log(Object.keys(subsidiaries).length);

//export to file

fs.writeFile("data-amchart.js", "let data =", (error) => {
  if (error) throw error;
});

fs.appendFile("data-amchart.js", JSON.stringify(subsidiaries, null, 2), (err) => { if (err) 
  throw err;
}
);

fs.appendFile("data-amchart.js", ";export default data;", (err) => { if (err) 
  throw err;
}
);