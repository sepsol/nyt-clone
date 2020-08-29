const searchResults = document.getElementById('search-results');
let content = [];

const authKey = 'HL1zkPePcTNLTnPBpcDKBpWZWsAngbnq';
const queryTerm = 'covid';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const query = `q=${queryTerm}`;
const apiKey = `api-key=${authKey}`;

(async function getData() {
  const response = await fetch(`${url}?${query}&${apiKey}`);
  const data = await response.json();

  content = data.response.docs.map(doc => ({
    headline: doc.headline.main,
    abstract: doc.abstract
  }));
  let li = [];

  for (i = 0, length = content.length; i < length; i++) {
    li = [...li, document.createElement('li')];
    li[i].innerHTML = content[i].headline;
    searchResults.append(li[i]);
  }
})();

/* 

=== NOTE TO SELF === 

// this is how you would resolve promises (fetch api) with async-await approach
(async function getData() {
  const response = await fetch(`${url}?${query}&${apiKey}`);
  const data = await response.json();
  console.log(data);
})();

// this is how you would resolve promises (fetch api) with .then approach
fetch(`${url}?${query}&${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data));

*/
