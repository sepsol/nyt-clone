const searchResults = document.getElementById('search-results');
let content;

const authKey = 'HL1zkPePcTNLTnPBpcDKBpWZWsAngbnq';
const queryTerm = 'covid';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const query = `q=${queryTerm}`;
const apiKey = `api-key=${authKey}`;

fetch(`${url}?${query}&${apiKey}`)
  .then(response => response.json())
  .then(data =>
    data.response.docs.map(
      doc => (searchResults.innerHTML = `<li>${doc.headline.main}</li>`)
    )
  );

// content = 'hello, world!';
// searchResults.innerHTML = '<li>hello</li>';
