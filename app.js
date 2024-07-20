// 1. استخدام XMLHttpRequest

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 400) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Failed to load data; status:', xhr.status);
  }
};
xhr.send();


// 2. استخدام fetch
fetch('https://api.example.com/data')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error('Failed to load data', error);
  });
  
//3. استخدام Axios (مكتبة خارجية)
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error('Failed to load data', error);
  });
