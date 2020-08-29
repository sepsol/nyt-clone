const root = document.getElementById('root');
let content;

const authKey = 'HL1zkPePcTNLTnPBpcDKBpWZWsAngbnq';
const queryTerm = 'covid';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const query = `q=${queryTerm}`;
const apiKey = `api-key=${authKey}`;

fetch(`${url}?${query}&${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data));

content = 'hello, world!';
root.innerHTML = content;
