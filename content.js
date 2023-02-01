// document.body.style.backgroundColor = "orange";
console.log("In content file");
alert("Extension Started! You can proceed with the test!");


// // Function to check the requirements
function checkRequirements() {
    // Check for audio
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(function(stream) {
        console.log("Audio is available");
    })
    .catch(function(error) {
        console.log("Audio is not available");
    });

    // Check for camera
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
        console.log("Camera is available");
    })
    .catch(function(error) {
        console.log("Camera is not available");
    });

    // Check for internet stability
    window.addEventListener("offline", function(e) {
        console.log("You are offline");
    });
    window.addEventListener("online", function(e) {
        console.log("You are online");
    });
}

// // Function to capture user information and store it in local storage
async function captureUserInformation() {
    // Capture IP address
    let userInfo = {}, userIP="";
    const data = await (await fetch('https://api.db-ip.com/v2/free/self')).json();
    // console.log(data);
    userIP = JSON.stringify(data, null, 2);
    userInfo.ip = userIP;
    // userInfo.requirementsCheck = checkRequirements();
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

const ele = document.getElementById("test");
const btn = document.getElementById("start");
const webBtn = document.getElementById("but");

btn.addEventListener('click', (e)=>{
    ele.style.display = 'block';
    ele.style.background = '#00ECB9';
    btn.style.display = 'none';
    checkRequirements();
    captureUserInformation();
    ele.requestFullscreen();

    let tt = new Date();
    let startTime = tt.getTime() + 1000;
    let deadline = startTime + 200000;
    
    document.getElementById("startTime").innerHTML = `${tt}`;

    let x = setInterval(function() {
    
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML =days ;
    document.getElementById("hour").innerHTML =hours;
    document.getElementById("minute").innerHTML = minutes; 
    document.getElementById("second").innerHTML =seconds; 
    if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "TIME UP";
            document.getElementById("day").innerHTML ='0';
            document.getElementById("hour").innerHTML ='0';
            document.getElementById("minute").innerHTML ='0' ; 
            document.getElementById("second").innerHTML = '0'; }
    }, 1000);
});

ele.addEventListener('visibilitychange', () => {
      if (document.hidden) {
            alert("Please stay focused on the test page");
            ele.requestFullscreen();
      }
});

document.addEventListener("keydown", function(event) {
    if (!ele.fullscreenElement) {
        // Show an alert
        alert("Please switch to full screen mode to continue the test.");

        // Make the page full screen
        ele.requestFullscreen();
    }
    // Prevent keyboard shortcuts
    if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey || event.key== 27) {
        event.preventDefault();
        return false;
    }

});

window.onbeforeunload = () => {
    alert("Dont' switch between tabs!");
  return false;
};
