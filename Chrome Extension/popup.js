document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("downloadBtn");
  btn.addEventListener("click", function () {
    console.log("iam clicked")
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "download_video" });
      console.log("i sent the message yo the content.js")
    });
  });
});
