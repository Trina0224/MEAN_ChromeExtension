console.log('background script ran');
let dev = true;
let domain = dev ? "http://localhost:8000/" : 'https://myamazonhistory.com/';
let path = "";

$.ajax({
  url: domain+path,
  data: {test: "test data"},
  type: "POST",
  success: function(response){
    console.log('response: ', response);
  },
  error: function(response){
    console.log('response: ', response);
  }

});