//function to Insert the URL Into  the Input Field

function insertUrlIntoInput(url) {
    const inputField = document.querySelector('input[name="url"]');
    if (inputField) {
      inputField.value = url;
    }
  }

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Message")
    if (message.action === 'extractYouTubeLink') {
      const videoElement = document.querySelector('video');
      if (videoElement) {
        const videoUrl = videoElement.src;
        chrome.runtime.sendMessage({ action: 'showYouTubeLink', link: videoUrl });
      }
    }
  });


  chrome.runtime.onMessage.addListener(function (message, sender , sendResponse){
    if(message.action === 'insertIntoUrl' ){
        const taburl = message.tabUrl;
        insertUrlIntoInput(taburl);

    }

  });
  