chrome.action.onClicked.addListener((tab) => {
    // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
    //     state: "fullscreen"
    // });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    });
});

// *****BELOW CODE IS FOR TESTING PURPOSES ONLY*****
// DO NOT UN-COMMENT BELOW CODE
// chrome.action.onClicked.addListener(() => {
//     chrome.tabs.create(({url: "popup.html"}), function(tab) {

//         chrome.scripting.registerContentScripts([{
//                 id: "session-script",
//                 js: ["content.js"],
//                 persistAcrossSessions: false,
//                 matches: ["*://popup/*"],
//                 runAt: "document_start",
//             }]).then(() => console.log("registration complete"))
//             .catch((err) => console.warn("unexpected error", err))
//         // console.log(tab); 
//         // chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
//         //     state: "fullscreen"
//         // });
//         // const id = tab.id;
//         //  chrome.scripting.executeScript({target: {tabId: tab.id}, file: ["content.js"]}, ()=>{
//                 // chrome.tabs.sendMessage(tab.id, tab);
//         //  });
//         // chrome.scripting.executeScript({
//         //     target : {tabId: tab.id, allFrames: true},
//         //     files: ["content.js"]
//         // }).then(()=>console.log("Injected!"));   
         
//   });

// });

// chrome.tabs.onCreated.addListener((tab) => {
//     const id = tab.id;
//         console.log(tab); 
//     chrome.scripting.executeScript({target: {tabId: tab.id}, files: ["content.js"]}, ()=>{
//         chrome.tabs.sendMessage(tab.id, tab);
//     });
// });

// chrome.runtime.onMessage.addListener((tab, sender, sendResponse)=>{
//     chrome.scripting.executeScript({
//         target : {tabId: tab.id},
//         files: ["content.js"]
//     }).then(()=>console.log("Injected!")); 
// })

// chrome.runtime.onInstalled.addListener((tab) => {
//   // Store the current date and time to limit the extension's functionality to a certain time/trigger
//     if(tab.url.includes("127.0.0.1:5500")){
//         const currentTime = new Date();
//         localStorage.setItem('startTime', currentTime);
//     // console.log(tabId, tab);
//         // chrome.windows.update(tabId, {
//         //     state: "fullscreen"
//         // });

//         // // Store the user's IP address
//         // fetch('https://api.ipify.org?format=json')
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         localStorage.setItem('userDetails', data);
//         //     });
//     }

//     chrome.scripting.executeScript({files: ["script.js"]}).then(()=>console.log("Injected!"));
// });



// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     // Check if the URL is a test page
//     if (details.url !== "http://127.0.0.1:5500/testingServer.html") {
//       return {};
//     }

//     // Store the test page URL in local storage
//     chrome.storage.local.set({ testPage: details.url });
//     // Run the requirements check when the extension is activated
//     // checkRequirements();

//     // Capture user information
//     // captureUserInformation();

//     openFullScreenMode();

//     // Prevent navigation from the test page
//     return { cancel: true };
//   },
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );

// // Function to check the requirements
// function checkRequirements() {
//     // Check for audio
//     navigator.mediaDevices.getUserMedia({audio: true})
//     .then(function(stream) {
//         console.log("Audio is available");
//     })
//     .catch(function(error) {
//         console.log("Audio is not available");
//     });

//     // Check for camera
//     navigator.mediaDevices.getUserMedia({video: true})
//     .then(function(stream) {
//         console.log("Camera is available");
//     })
//     .catch(function(error) {
//         console.log("Camera is not available");
//     });

//     // Check for internet stability
//     window.addEventListener("offline", function(e) {
//         console.log("You are offline");
//     });
//     window.addEventListener("online", function(e) {
//         console.log("You are online");
//     });
// }

// // Function to capture user information and store it in local storage
// async function captureUserInformation() {
//     // Capture IP address
//     let userInfo = {}, userIP="";
//     const data = await (await fetch('https://api.db-ip.com/v2/free/self')).json();
//     // console.log(data);
//     userIP = JSON.stringify(data, null, 2);
//     userInfo.ip = userIP;
//     // userInfo.requirementsCheck = checkRequirements();
//     localStorage.setItem("userInfo", JSON.stringify(userInfo));
// }

// // Check if the URL is a test page
// function isTestPage(url) {
//   // Replace this function with your own logic to determine if the URL is a test page
//   return true;
// }


// // Function to show the pop up when user switches between tabs or applications
// function showPopUp() {
//     // Show pop up
//     chrome.tabs.onActivated.addListener(function(activeInfo) {
//         alert("Please stay focused on the test page");
//     });
// }

// // Function to open the browser in full screen mode
// function openFullScreenMode() {
//     // Open full screen mode
//     chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
//         state: "fullscreen"
//     });
// }

// // Function to prevent browser navigation
// chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
// if (details.frameId === 0) {
//     // main frame navigation, cancel it
//     return {cancel: true};
// }
// return {};
// }, {url: [{hostContains: 'http://127.0.0.1:5500/testingServer.html'}]});


// // Show pop up when user switches between tabs or applications
// document.addEventListener("visibilitychange", function() {
//     if (document.visibilityState === "hidden") {
//     alert("You are not allowed to switch tabs or applications.");
//     }
// });

// // Disable the normal close button [shortcut keys should not work too]
// window.addEventListener("keydown", function(e) {
//     if (e.key === "F4" || (e.ctrlKey && e.key === "w")) {
//     e.preventDefault();
//     return false;
//     }
// });

