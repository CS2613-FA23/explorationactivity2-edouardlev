[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/kCrKdl4V)
# ExplorationActivity2 README.md
## By Edouard Levesque
### Which library my sample program demonstrates
My library demonstrates the use of automated email sending with the use of of the Nodemailer library. It is a library with the main purpose of simplifying the use of sending emails programatically.

### How to run my sample program

In order to run my sample program, you must install the library first by running the install command in your terminal: 
```console
 npm install nodemailer
```

My program uses a CSV file online (on GitHub) to import the contacts we want to send the mail to, therefore we do not need to have any additional local files other than the program.

After installing the library you can run the program by typing in the program name followed by the link to the raw csv file. You can use the one provided below for testing. 

```console
node jobMailer.js https://raw.githubusercontent.com/CS2613-FA23/explorationactivity2-edouardlev/main/input.csv
```
You can see what the format of the csv file looks like by following it in a browser. If you would like to use your own csv, upload to github, click the "raw" button on the page and copy the link.

The format of the csv file goes 
1. number 
2. full name 
3. email 
4. position they applied for 
5. if they got the job (yes or no)


### The purpose of my program

My program serves the purpose of helping a made-up startup named GigaTechLabs send multiple personalised emails to applicants at once letting them know if they got the job or not. This works very fast. It also sends the email directly from the company email so the candidate does not see it as them getting an email from a random machine. The program could be modified to accomodate a different company aswell. 

### Input and output examples

After running the program with the sample csv file, we can see an output of who got sent an email in the terminal.

```console
edouardlevesque@Edouards-MacBook-Pro sourcecode % node jobMailer.js https://raw.githubusercontent.com/CS2613-FA23/explorationactivity2-edouardlev/main/input.csv 

Email sent to james_davies@mailinator.com
Message ID: <a226e578-04a1-5367-5db0-66320a586b8c@gmail.com>

Email sent to mia_garcia99@mailinator.com
Message ID: <a6cd8c5e-623f-9232-91ad-1030534010ff@gmail.com>

Email sent to oliver_rdz@mailinator.com
Message ID: <37078509-87bf-6617-2d56-294da798a8a3@gmail.com>

Email sent to emma_wills27@mailinator.com
Message ID: <e15c396c-5809-c874-1494-5c663a04fdd9@gmail.com>

Email sent to isabella_gz@mailinator.com
Message ID: <00c38047-d46f-1c30-ddd9-871634fd9a1b@gmail.com>

Email sent to elijah_mtz@mailinator.com
Message ID: <a213af77-e7a5-9c1b-82d4-c9d434ac4905@gmail.com>

Email sent to charlotte_a23@mailinator.com
Message ID: <f8b0c7f9-7f53-7bf9-a814-8e02457f05aa@gmail.com>

Email sent to harper_moore12@mailinator.com
Message ID: <7ed59778-8617-d244-d732-aef51410bb4c@gmail.com>

Email sent to amelia_wils567@mailinator.com
Message ID: <48c6f974-1cb3-5b4c-83cd-98ab52c544e8@gmail.com>

Email sent to ava_pate123@mailinator.com
Message ID: <901a66d9-7cd9-8cd0-8d20-cad1ad5ac59d@gmail.com>

Email sent to will_smith88@mailinator.com
Message ID: <b846d184-00d5-dc89-caba-9662e26dd0c8@gmail.com>

Email sent to noah_brownie@mailinator.com
Message ID: <84dd8956-946f-e19d-22fe-da74a3ad6bbc@gmail.com>

Email sent to ethan_thom@mailinator.com
Message ID: <9f7f9e5f-0b47-64ef-e8c3-e38739d3e2e2@gmail.com>

Email sent to liam_ngo@mailinator.com
Message ID: <218c3d67-bcf6-70c1-5431-a604b65c3af9@gmail.com>

Email sent to sophia23@mailinator.com
Message ID: <c4d74337-bdbc-ce00-c32a-bc60002d035b@gmail.com>

edouardlevesque@Edouards-MacBook-Pro sourcecode % 
```

Going to the website [mailinator.com]('https://www.mailinator.com/'). We can enter any user names of these users and see what they get on their end (these are not real people or used emails). For instance, let's see that ethan_thom@mailinator.com, who did in fact get the fake job.

![inp1](https://github.com/CS2613-FA23/explorationactivity2-edouardlev/blob/main/enter-email.jpg?raw=true)

We enter ethan_thom in the 'Enter public Mailinator Inbox' field.
The latest email should be the one we just sent.

![inp2](https://github.com/CS2613-FA23/explorationactivity2-edouardlev/blob/main/enter-email.jpg?raw=true)

