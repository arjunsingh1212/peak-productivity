## PEAK PRODUCTIVITY
> A Web Development Project - Peak-Productivity is a web application that is intended to be used in order to increase the productivity in student's daily tasks and learning. It digitalizes a few of the Time management techniques in the form of web application. The decription of those techniques are stated in the subsections. (Involves HTML, CSS, JS, Bootstrap for front-end and NodeJs, ExpressJs, EJS for backend & MongoDB for Database)

## Content
* [Overview of the Project](#overview) 
    * [Deployed web application address/link](#deployed-web-app) 
    * [What is it all about?](#what-is-it-all-about?)
* [Technical details](#technical-details) 
    * [The tech-stack used in the development of the project](#tech-stack) 
    * [How to download/clone and execute the Project (including server-side scripts) on your machine](#how-to-execute-on-your-machine) 
    * [About the time management techniques](#about-the-techniques)
    * [Future Scope](#future-scope)

# Overview

## Deployed Web App
The working version of this ML based web-app is deployed on Heroku platform. Go to [https://peak-productivity.herokuapp.com/](https://peak-productivity.herokuapp.com/) to have a look.


## What is it all about?
This project is made in order to bring the time management techniques in the form of a web application. The title of the web app is P.E.A.K productivity. Each letter stands for one of those techniques - Pomodoro, EisenHower, Agenda, KeepTrack. We'll see more about them in below sections.

# Technical details

## Tech Stack
The tools and technologies used to develop this web applications are 
* HTML, CSS, Bootstrap
* Javascript
* NodeJs
* EJS
* MongoDB

#### Brief Information
> HTML, CSS, Bootstrap have been used to design the front-end of the web app.

> Javascript is used to give the web app functionalities specially the working of Pomodoro clock.

> NodeJs is used to build the server-side back-end.

> EJS is Embedded Javascript Templating engine that helps to build dynamic content for the web app.

> MongoDB is used as the Database server for the project to persist the data of EisenHower, which we'll see below.


## How to execute on your machine

> Follow/Understand the steps to execute/run the project on your machine.

* Download and extract the zip bundle of the project or clone the project using git cloning commands.


* Download and install NodeJs if your system doesn’t have NodeJs installed. It is assumed that you are downloading the project on the NodeJs-installed machine. If you don't have NodeJs, then simply install it from this link. [https://nodejs.org/en/](https://nodejs.org/en/)

* Install the node modules (and the dependencies) by executing the following command
```javascript
npm install 
```

* Now, simply run the following command to run the web application on your browser on port `3000`	
```javascript
node app.py
```
If all the dependencies are satisfied, then you are good to go. The application would run successfully. :)

* Verify the deployment by navigating to your server address in your preferred browser.
```javascript
127.0.0.1:5000
```

## About the techniques

#### Pomodoro
The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.

- There are six steps in the original technique:

    1. Decide on the task to be done.
    2. Set the pomodoro timer (traditionally to 25 minutes).
    3. Work on the task.
    4. End work when the timer rings and put a checkmark on a piece of paper.
    5. If you have fewer than four checkmarks, take a short break (3–5 minutes) and then return to step 2; otherwise continue to step 6.
    6. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.

#### EisenHower
> Eisenhower's Urgent/Important Principle helps you quickly identify the activities that you should focus on, as well as the ones you should ignore. When you use this tool to prioritize your time, you can deal with truly urgent issues, at the same time as you work towards important, longer-term goals.

- To use the tool, list all of your tasks and activities, and put each into one of the following categories:

    - Important and urgent.
    - Important but not urgent.
    - Not important but urgent.
    - Not important and not urgent.

Then schedule tasks and activities based on their importance and urgency.

#### Agenda 
> In this we keep records of the important meeting and schedules and plans which we can't offord to miss. This is for those things which are required to be done at specific times.

> We can add the title, date and time to the list which will be displayed according to Current Day's schedules. 

#### KeepTrack
> This is one of the main part of Web App. The Intention for this feature is to increase the productivity and decrease the wastage of time. It is used to track your daily routine - How much time you spend on what work. We stores starting time, ending time and the title of the work. After each day, you can download the whole track record of the day and analyze how much time you spend on what kind of work. You can also measure how well you are doing in the way of achieving your goal.





## Future scope

> Till now, I've only made it usable for just me, as there is no Access Management facility. I plan to add the Access Management soon so that people can create account and use the application separately.

> There are a lot of scope of improvement in the features by adding extra customizations, which I plan to do in future.


##### This was a small and useful project which helps me manage my time effectively.