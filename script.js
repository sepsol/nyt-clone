const root = document.getElementById('root');
let content;

const url = 'https://services.cnn.com/newsgraph/search/';
const api_key = '?api_key={api_key}';

fetch(url + 'headline:"covid"' + api_key)
  .then(response => response.json())
  .then(data => console.log(data));

content = 'hello, world!';
root.innerHTML = content;
