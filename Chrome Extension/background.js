chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.videoUrl) {
      console.log(request.videoUrl); // Logging videoUrl to the console
    }
  });
  