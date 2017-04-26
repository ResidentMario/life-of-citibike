# Life of Citibike

## About

This application is an exploratory, interactive visualization of CitiBike in New York City.

## History

In August of 2016 I set out to finally build an application designed to demo the extent and reach of CitiBike in New York City. You can read the technical write-up on how that went [here](http://www.residentmar.io/2016/08/27/day-in-the-life-of-citibike.html).

This was my first huge data visualization project, and I was never fully satisfied with two things about it:
1. The design, which was altogether too confusing.
2. The front-end architecture, which was written in 100% pure JavaScript.

I submitted this project for feedback, which made it pretty clear to me what the faults of the visualization were and how I could go about addressing them.

Close to a year later (in April 2017) I am finally building a new front-end for this project. I am using React and Redux, bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), to avoid the nattiness of pure JS and build a proper, understandable application.

I am still using the same data, hosted in MongoDB and served via a Flask API on my personal website. However, the application itself is now a separate concern running on Node.JS.

## Technologies
* Python
* Flask (Python)
* Node.JS (via Create React App bootstrapping)
* React
* Redux
* D3.JS
* MongoDB
* Leaflet

## Status

Unfinished. Unlikely to be finished.

But, I did learn how to use React and Redux through this project!