const nodemailer = require('nodemailer');

var names = [];
var emails = [];
var position = [];
var offer = [];

let transpo = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'edsexplorationactivity@gmail.com', 
    pass: 'fdry qbdz xxbs fkkk'
  }
});

transpo.verify(function(error, success) {
  if (error) {
        console.log(error);
  } else {
        console.log('Server is ready to take our messages');
  }
});

function sendEmail(content, emailOut, positionName) {
const formattedContent = content.replace(/\n/g, '<br>');

let mailOptions = {
    from: 'edsexplorationactivity@gmail.com',
    to: emailOut,
    subject: 'Response to application at GigaTechLabs LLC🧑‍💻',
    html: `
    <html>
      <head>
        <style>
          p {
            font-size: 128px;
          }
          body {
            font-family: 'Arial', sans-serif;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <p style="font-family: 'Arial'; font-size: 12px;">${formattedContent}</p>
        <img src="https://github.com/CS2613-FA23/explorationactivity2-edouardlev/blob/main/logo.jpg?raw=true" alt="GitHub Image" width="100px">
      </body>
    </html>
  `
};


transpo.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred: ', error.message);
        console.log("with email: " + emailOut)

    } else {
    console.log('Email sent to ' + emailOut);
    console.log('Message ID:', info.messageId + "\n");
    }
});

}

async function readCSV(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const processedData = await processData(data);

    offerSender();
  } catch (error) {
    console.log('Error reading csv file, please ensure the link you provided leads to raw CSV content with the correct format.');
    return;
  }
}


function processData(data) {
  const lines = data.split("\n");
  for(let i = 1; i < lines.length; i++) {
    let lineData = lines[i].split(",");
    names.push(lineData[1]);
    emails.push(lineData[2]);
    position.push(lineData[3]);
    offer.push(lineData[4].split('\r')[0]);
  }
  //console.log(offer);
}

async function offerSender() {


  for(let i = 0; i < names.length; i++) {
    //console.log(names.length);
    if(offer[i]==='yes'){
      emailContent = "Hello, " + names[i].split(" ")[0] + "\n\nWe really enjoyed talking with you and we would like to offer you the position of "
      + position[i] + " at GigaTechLabs LLC. Please check your emails for a follow up meeting in the coming days. We're really happy about the possibility" +
      " of you joining our team.\n\nregards,\n\nAymé Césaire\nRecruiting team\nGigaTechLabs LLC";
      //console.log(emailContent);
    } else {
      emailContent = "Hello, " + names[i].split(" ")[0] + "\n\nThank you for your interest and time spent discussing the "
      + position[i] + " position at GigaTechLabs LLC. After careful consideration, we've decided to move forward with another candidate."
      + " We appreciate your time and enthusiasm during the process."
      + "\n\nregards,\n\nAymé Césaire\nRecruiting team\nGigaTechLabs LLC";
      //console.log(emailContent);

    }
   //await sendEmail(emailContent, emails[i], position[i]);
  }

}

if(process.argv.length <= 2) {
  console.log("Please run program again with a link to raw csv in command line to process contacts." 
  + "\n(Ex: node jobMailer.js linkHere)");
} else {
readCSV(process.argv[2]);
}


