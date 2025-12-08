const { URL } = require('url');
const querystring = require('querystring');

function parseAndPrintUrlComponents(urlString) {
  try {
    const url = new URL(urlString);

    console.log('Protocol:', url.protocol);
    console.log('Hostname:', url.hostname);
    console.log('Pathname:', url.pathname);

    // Parse query parameters
    const queryParams = querystring.parse(url.search.substring(1)); // Remove the leading '?'
    console.log('Query Parameters:', queryParams);

  } catch (error) {
    console.error('Error parsing URL:', error.message);
  }
}

const exampleUrl = 'https://www.example.com/path/to/page?name=John%20Doe&age=30&city=New%20York';
parseAndPrintUrlComponents(exampleUrl);

const anotherExampleUrl = 'http://localhost:8080/api/data?id=123&status=active';
parseAndPrintUrlComponents(anotherExampleUrl);

const simpleUrl = 'https://www.google.com';
parseAndPrintUrlComponents(simpleUrl);

const invalidUrl = 'not-a-valid-url';
parseAndPrintUrlComponents(invalidUrl);