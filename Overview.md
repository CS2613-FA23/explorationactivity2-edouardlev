# Overview of Nodemailer
## By Edouard Levesque

### Nodemailer
### The purpose

Nodemailer is a Node.js module that allows us to send emails from our server or machine easily. It is a module that does not require dependencies, so no external resources are required for it to work properly. It can help send about any type of email, such as plain text, with attachments, or HTML (what I used for my program). It sends emails through any SMTP server or a large email provider. If using main email providers, we must use workarounds, as these normally have higher security settings than Nodemailer can handle. Nodemailer works with any unicode character, so we are able to send emojis and more complex characters. [ref](https://www.turing.com/kb/comprehensive-guide-to-sending-an-email-using-nodemailer)

### How to use it
#### The following will show you how to use Nodemailer with Gmail.

Assuming node is installed on your computer, we must first install the nodemailer module.
```console
 npm install nodemailer
```

We must setup our Gmail account to be able to proceed. Make sure your 2FA Gmail settings are turned on. Head to the 2 factor authentification settings in your Google Account. Scroll down and click on "App passwords".

![inp1](https://github.com/CS2613-FA23/explorationactivity2-edouardlev/blob/main/app-password-preview.jpg?raw=true)

Then, you can give a name to your Nodemailer project and click "create". Save the produced password for your records, we need it for the next step.

![inp2](https://github.com/CS2613-FA23/explorationactivity2-edouardlev/blob/main/creat-app-pw.jpg?raw=true)


Then, create a new program where you want to use Nodemailer. The following is what we need for Nodemailer to function.

Next we can put the require('nodemailer') at the top and then make the transport with the password we just generated. The transporter is what sends the emails.

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

We can include a piece of code which will tell us if our connection is valid or not. If you were to use your regular Gmail password, this would return an error.

```console
transpo.verify(function(error, success) {
  if (error) {
        console.log(error);
  } else {
        console.log('Server is ready to take our messages');
  }
});
```

Next, we're going to prepare a basic email to be sent. The from will be the email from "auth" which we set up a bit earlier. You can choose the to and the subject will be what the recipient gets as the subject. Here the email content is pretty simple, though instead of text we can use html instead to send. 

```console
let mailOptions = {
      from: tomerpacific@gmail.com,
      to: tomerpacific@gmail.com,
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };
```

The above email content is pretty simple, though instead of text, we can use HTML to send. 

```console

const htmlContent = `
  <h1>Hello!</h1>
  <p>This is an example email with HTML content sent via Nodemailer.</p>
`;

let mailOptions = {
      from: tomerpacific@gmail.com,
      to: tomerpacific@gmail.com,
  subject: 'Sending HTML Email using Node.js',
  html: htmlContent
};
```

If you wish to add attachments, you can place an attachment field under your text/HTML field.

```console
attachments: [
    {
      filename: 'file.txt', // Name of the file as it will appear in the email
      path: '/path/to/your/file.txt' // Path to the file to be attached
    }
    // Add more attachments if needed, following the same structure
  ]
```

The last step is to send the email. The function to do this may also report errors if one were to arise.

```console
transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
```


[ref1](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/)
[ref2](https://mailtrap.io/blog/sending-emails-with-nodemailer/)

### Functionalities of the library

About every functionality has been highlighted in the section above, here are some more precise ones.

#### Using your own domain

You can find the 
needed info in the email configuration of your hosting provider. Here is what the transporter would look like if you wanted to use your own domain name.

```console
var transporter = nodemailer.createTransport({
    host: 'something.yourdomain.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'username@mydomain.com', // your domain email address
      pass: 'password' // your password
    }
  });

```
[ref](https://stackoverflow.com/questions/49870196/how-to-define-custom-domain-email-in-nodemailer)

#### Custom headers

The average message being sent with nodemailer does not need changes with the headers. Some headers include from, to, and subject.

```console
let mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Email with Custom Headers',
  text: 'Check out this email with custom headers!',
  headers: {
    'X-Custom-Header': 'Custom Value',
    'X-Another-Header': 'Another Value'
  }
};
```
[ref](https://nodemailer.com/message/custom-headers/)

### When it was created

Nodemailer was created in 2010. It was brought up because according to them there was no good options to send mail back then.
[ref](https://nodemailer.com/)
### Why I selected this library

I selected this library as it seemed pretty straightforward, and it is. I do not mean I chose it because it seemed like the easier option, but because is does not add too much unneeded fluff that some other libraries tend to have. For this, I feel like I could have a stronger knowledge about most of this library rather than only part of a larger library (like my last exploration activity).

### How did learning this influence my knowledge of the language?

This language made me dig deeper into some parts of Javascript. For instance, I was not sure when to use async, but this was the perfect project to practice with it. As when I did not use the await keyword, the program would only send some emails as it was going too fast. After using it, everything worked smoothly. As I have been comfortable with Javascript for some time, I believe that was the biggest piece of info I learned.


### How my experience with this library was

I would definitely recommend this library to somebody if they would need to automate their email sending habits. I would also recommend if they would need to send emails to multiple people at once.

If the oppprtunity for me to send personalised emails to a large group of people were to arise, I would definitely use this. It was simple to setup and use. I did not run into too many unexpected problems. I almost feel like this is a "model" Javascript library.








