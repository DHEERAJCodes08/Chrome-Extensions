chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("hey we are in popup mode")
    const currentTabUrl = tabs[0].url;
    const currentTabID = tabs[0].id;
    console.log('We got the Current Tab Url ' , currentTabUrl);
    console.log('We got the Current Tab id ' , currentTabID);

    chrome.runtime.sendMessage({ action:'insertIntoUrl',tabUrl: currentTabUrl })

    
    chrome.tabs.sendMessage(tabs[0].id, { action: 'extractYouTubeLink' });
  });   // After this Step it is Passed to the Content.js Where the Extraction of the YouTube video is done
  


  //yeh Waha se Jo arrra hai uska hai 
  chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === 'showYouTubeLink') {
      console.log('YouTube Video Link:', message.link);
    }
  });


  


  //When Extension button is Clicked



/*     chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
        const currentTabUrl = tabs[0].url;
        console.log("Your video Link",currentTabUrl)

        const downloadUrl = `https://ssyoutube.com/${encodeURIComponent(currentTabUrl)}`;
        chrome.tabs.create({ url: downloadUrl });
    } );
 */


