chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_video") {
    console.log("i recieved the msg from the popup.js");
    const videoElement = document.querySelector("video");
    if (videoElement) {
      console.log("got video url: ")
      const videoUrl = videoElement.src;
      alert("Video found on this page!" );
      chrome.runtime.sendMessage({videoUrl}) // sending videourl to the background script
      

    } else {
      alert("No video found on this page.");
    }
  }
});
