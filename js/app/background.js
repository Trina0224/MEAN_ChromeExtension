console.log('background script ran');
let dev = true;
let domain = dev ? "http://localhost:8000/" : 'https://myamazonhistory.com/';
let path = "save-products";


chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      switch(message.type) {
        case 'onPopupInit':
          console.log('ran onPopupInit Case in background.js');
          // sendResponse(getStorageItem('user'));
          return true;
          break;
        case "login":
          console.log('login logic ran with formData = to', message.data);
          // let userLoginCreds = message.data;
          // userLoginCreds.username = message.data.email.split('@')[0];
          // ajaxCall("POST", "user/login", userLoginCreds, '', function(response){
          //    console.log('response from server is: ',response);
          //    setStorageItem('user',response);
          //    sendResponse(response);
          // })
          return true;
          break;
        case "signup":
        console.log('signup logic with formData = to', message.data);
        // let userCreds = message.data;
        // userCreds.username = message.data.email.split('@')[0];
        // ajaxCall("POST", "user/signup", userCreds, '', function(response){
        //     console.log('response from server is: ',response);
        //     sendResponse(response);
        // })
        return true;
        break;

        default:
          console.log('couldnt find matching case');
    }
});


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