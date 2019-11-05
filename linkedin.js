let arrUsers = [];
let numberOfUsers = 0;
let intervalUsers;
let lastWindowHeight = -1;

function startScript(numberOfCon) {
  numberOfUsers = numberOfCon;
  connectWith();
}

function connectWith() {
  runInterval().then(value => sendConnections());
}

function runInterval() {
  return new Promise((resolve, reject) => {
    intervalUsers = setInterval(function() {
      window.scrollTo(0, document.body.scrollHeight);

      if (
        numberOfUsers <= arrUsers.length ||
        document.body.scrollHeight == lastWindowHeight
      ) {
        console.log(
          "Finishing interval, we already got enough users or we can not find anymore..."
        );
        clearInterval(intervalUsers);
        resolve(1);
      }

      arrUsers = document.querySelectorAll(
        'button[data-control-name="invite"]'
      );
      console.log("We got " + arrUsers.length + " users (for now)...");

      lastWindowsHeight = document.body.scrollHeight;
    }, 2000);
  });
}

function sendConnections() {
  let totalConnectionsSent = 0;

  for (let usr of arrUsers) {
    if (totalConnectionsSent >= numberOfUsers) {
      break;
    }

    usr.click();
    totalConnectionsSent += 1;
  }

  console.log("FINISHED!");
  console.log("Sent " + totalConnectionsSent + " connections.");
  console.log("Have a nice work day at Glints :)");

  alert(
    "FINISHED!\n\nSent " +
      totalConnectionsSent +
      " connections.\nHave a nice work day at Glints :)"
  );
}

// Change the number if you want
startScript(100);
