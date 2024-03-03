//import { data } from "../data/data-highcharts.js";

let data =[
    [
      "ELECTRICITE DE FRANCE",
      "FRAMATOME"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "DALKIA"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "ELECTRICITE DE STRASBOURG"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "CYCLIFE"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "Energy2Market (E2M)"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "IZIVIA"
    ],
    [
      "FRAMATOME",
      "EDVANCE"
    ],
    [
      "EDF Immo",
      "LA GERANCE GENERALE FONCIERE"
    ],
    [
      "SOCIETE C3",
      "EDF Investissements Groupe"
    ],
    [
      "EDF HOLDING SAS",
      "Groupe EDF Trading"
    ],
    [
      "EDF International",
      "Shandong Zhonghua Power Company Ltd."
    ],
    [
      "EDF International",
      "Datang Sanmexia Power Company Ltd."
    ],
    [
      "EDF International",
      "EDF (China) Holding Ltd."
    ],
    [
      "EDF International",
      "TDE SpA"
    ],
    [
      "EDF (China) Holding Ltd.",
      "Jiangxi Datang International Fuzhou Power Generation Company Ltd."
    ],
    [
      "EDF Gas Deutschland",
      "FS GmbH"
    ],
    [
      "Lake Acquisitions Ltd.",
      "EDF Energy Nuclear Generation Ltd."
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDF HOLDING SAS"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "IZI SOLUTIONS"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "IZI Confort"
    ],
    [
      "EDF International",
      "Meco"
    ],
    [
      "EDF International",
      "Sloe Centrale Holding BV"
    ],
    [
      "EDF Inc.",
      "EDF Trading North America"
    ],
    [
      "EDF Norte Fluminense",
      "Companhia Electrica de Sinop (CES)"
    ],
    [
      "Taishan Nuclear Power Joint Venture",
      "EDF (China) Holding Ltd."
    ],
    [
      "EDF Energy UK",
      "EDF Energy Holding Ltd."
    ],
    [
      "TDE SpA",
      "Groupe EDISON"
    ],
    [
      "EDF Energy Holding Ltd.",
      "NNB Holding Company (HPC) Ltd."
    ],
    [
      null,
      "ELECTRICITE DE FRANCE"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "ENEDIS"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDF Immo"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "Agregio"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "SOWEE"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "EDF ENR"
    ],
    [
      "EDF Immo",
      "SOCIETE FONCIERE IMMOBILIERE ET DE LOCATION (SOFILO)"
    ],
    [
      "EDF Pulse Holding",
      "Hynamics"
    ],
    [
      "EDF International",
      "EDF Norte Fluminense"
    ],
    [
      "EDF International",
      "EDF Energy UK"
    ],
    [
      "EDF Belgium",
      "Luminus"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "COENTREPRISE DE TRANSPORT D'ELECTRICITE"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDF International"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDF Pulse Holding"
    ],
    [
      "EDF International",
      "EDF Inc."
    ],
    [
      "EDF International",
      "EDF Gas Deutschland"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "EDVANCE"
    ],
    [
      "ELECTRICITE DE FRANCE",
      "SOCIETE C3"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "EDF Renouvelables"
    ],
    [
      "EDF DEVELOPPEMENT ENVIRONNEMENT SA",
      "DOMOFINANCE"
    ],
    [
      "SOCIETE C3",
      "RESOCEANE"
    ],
    [
      "SOCIETE C3",
      "Wagram Insurance Company"
    ],
    [
      "Groupe EDF Trading",
      "EDF Inc."
    ],
    [
      "EDF International",
      "EDF Belgium"
    ],
    [
      "EDF International",
      "Taishan Nuclear Power Joint Venture"
    ],
    [
      "EDF Energy Holding Ltd.",
      "Lake Acquisitions Ltd."
    ],
    [
      "EDF Energy Holding Ltd.",
      "NNB Holding Company (SZC) Ltd."
    ]
  ];

Highcharts.chart('container', {
  chart: {
      spacingBottom: 30,
      marginRight: 120,
      height: 1200
  },
  title: {
      text: 'EDF Group Organisation in 2022'
  },
  series: [
      {
          type: 'treegraph',
          keys: ['parent', 'id', 'level'],
          clip: false,
          data: data,
          marker: {
              symbol: 'circle',
              radius: 6,
              fillColor: '#ffffff',
              lineWidth: 3
          },
          dataLabels: {
              align: 'left',
              pointFormat: '{point.id}',
              style: {
                  color: '#000000',
                  textOutline: '3px #ffffff',
                  whiteSpace: 'nowrap'
              },
              x: 24,
              crop: false,
              overflow: 'none'
          },
          levels: [
              {
                  level: 1,
                  levelIsConstant: false
              },
              {
                  level: 2,
                  colorByPoint: true
              },
              {
                  level: 3,
                  colorVariation: {
                      key: 'brightness',
                      to: -0.5
                  }
              },
              {
                  level: 4,
                  colorVariation: {
                      key: 'brightness',
                      to: 0.5
                  }
              },
              {
                  level: 6,
                  dataLabels: {
                      x: 10
                  },
                  marker: {
                      radius: 4
                  }
              }
          ]
      }
  ]
});
