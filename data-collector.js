//import the fetch API
import fetch from 'node-fetch';

//Specify API request
const APIrequest = "limit=100&where=annee=date'2022'&select=societe_parente,perimetre_juridique_raison_sociale"

// Specify URL
const URL = "https://opendata.edf.fr/api/explore/v2.1/catalog/datasets/organigramme-du-groupe-edf/records?" + APIrequest

//Fetch data and return it
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  //console.log(data);
  return data;
};

fetchData();

const tree = {};

