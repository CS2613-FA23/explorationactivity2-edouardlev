# Overview of Nodemailer
## By Edouard Levesque

### Nodemailer
### The purpose

Nodemailer is a Node.js module which allows us to send emails from our server or machine easily. It is a module that does not required dependencies so no external resources are required for it to work properly. It can help send about any type of email. Such as plain text, with attachments, or html (what I used for my program). It sends emails through any SMTP server or Gmail/outlook etc. If using main email providers we must use workarounds as these normally have higher security settings that Nodemailer can handle. Nodemailer works with any unicode character so we are able to send emojis and more complex characters. [ref](https://www.turing.com/kb/comprehensive-guide-to-sending-an-email-using-nodemailer)

### How to use it
#### The following will show you how to use Nodemailer with Gmail.

Assuming node is installed on your computer, we must first install the nodemailer module.
```console
 npm install nodemailer
```

We must setup our Gmail account to be able to proceed. Head to the 2 factor authentification settings in your Google Account.



Then, create a new program where you want to be using Nodemailer. The following is what we need for Nodemailer to function.

```console
const nodemailer = require('nodemailer');

let transpo = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'edsexplorationactivity@gmail.com', 
    pass: 'App password here'
  }
});
```



