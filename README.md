### 

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Banner1a.png" alt="Logo">
  </a>

  <h1 align="center">Yumzie</h1>

  <p align="center">
    What are you hangry for?
    <br />
    <a href="https://github.com/stephp23/Yumzie-App"><strong>🔍Explore the Docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/stephp23/Yumzie-App">👀 View Demo</a>
    ·
    <a href="https://github.com/stephp23/Yumzie-App">🐛Report Bug</a>
    ·
    <a href="https://github.com/stephp23/Yumzie-App">✍🏽Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#installation">Installation</a>
      <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#description">Description</a></li>
         <li><a href="#wireframes">Wireframes</a></li>
         <li><a href="#component-hierarchy">Component Hierarchy</a></li>
         <li><a href="#api">API</a></li>
         <li><a href="#mvp">MVP</a></li>
         <li><a href="#post-mvp">Post MVP</a></li>
      </ul>
    </li>
    <li>
      <a href="#our-journey">Our Journey</a>
      <ul>
        <li><a href="#challenges-we-ran-into">Challenges We Ran Into</a></li>
        <li><a href="#accomplishments">Accomplishments</a></li>
        <li><a href="#what-we-learned">What We Learned</a></li>
      </ul>
    </li>
    <li><a href="#whats-next">What's Next</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#our-team">Our Team</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->

## Overview 

## Description 

Yumzie is a mobile responsive website application that provides recipe recommendations personalized to the individual's tastes, recipe search, and diet concerns. Yumzie is your smart cooking sidekick when you're **feeling HANGRY**, offering personalized guidance every step of the way. With **over 1 million recipe recommendations**, Yumzie has everything you need to level up in the kitchen. 


 <a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Banner2a.png" alt="Logo">
  </a>


## Wireframes - Desktop

<a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Desktop1.png" alt="Logo">
  </a>
 
 ## Wireframes - Tablet

 <a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Tablet1.png" alt="Logo">
  </a>

 ## Wireframes - Mobile


  <a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Mobile1.png" alt="Logo">
  </a>


## Component Hierarchy 

<a href="https://github.com/stephp23/Yumzie-App">
    <img src="src\images\Components1.png" alt="Logo">
  </a>

## API 

We are using the [Edamam Recipe Search API](https://www.edamam.com/) which has the following features:

* 1.7+ million nutritionally analyzed recipes 
* Detailed macro and micronutrient data
* Filter by calories, diets and allergens
* Recipe data (image, ingredients, title)
* 10 Diet, Health and Allergy filters
* Up to 100 results per call
* 5,000 API Calls per month
* 5 throttling calls per minute
  
## MVP 

The Yumzie MVP version will have the following features:

* Responsive design on _desktop, tablet and mobile_
* Keyword search over **1 million recipes**
* Select curated recipes from over 10 curated categories 

## Post MVP 

As we expand on the key functionality of the Yumzie application, we envision that we would expand to offer the following features:

* Generate grocery lists and shopping carts with food aisle categorization
* Search by desired caloric nutrients 
* Glycemic Index information
* Add and save favorite recipes


## Challenges We Ran Into 
🤷🏽‍♀️ Of course, no project would be complete without its fair share of hiccups! Some of the notable challenges we faced were ... 

* After accessing the Edamam API to display results based on a single query, we experienced a challenge of incorporating `React-Router` to link additional category components, and have the results display on a new page.  The UI/UX design included category cards that would display on loading.  We discovered that by utilizing the react hook `{useParams}` from react-router-dom that we could map through the API and display the results in a query.  
  
* After pulling a _redbull infused all-nighter_ and adding _hundreds of lines of CSS styling_ while trying out the **Live Share** feature to peer code in VS Code for the first time, we finally got our project to display as our UI/UX design. 🎉We were on TOP of the world-- now we only need to simply `git push` to the project branch, and deploy the project.  However, when attempting to push the updated project to github, there was an error due to being on the incorrect branch, and unbeknownst to us, **all of the udpated files were LOST** 💀 _(we later uncovered they were stashed)_  After a concerted effort to find out how to revert to a previous commit, minor panic attacks, and the calm and collective instructions from the more experienced fellows in the cohort, we discovered that `git stash list` `git stash show` and `git remote set-url origin url` helped recover all of our lost code! Whew- that was close.   

## Accomplishments 

We accomplished the following in a short period of time:

* In spite of our challenges with building our first React application, we were able to deploy a fully functional application that met the specifications of the project brief.
  
* We truly had to lean on our resources and network in order to level up our programming skills to accomplish this project, and that for us was a definite win.

## What We Learned 

We learned the following very quickly:

* How to access and display data from a API and use React-Router-DOM in order to route the data to multiple components and pages.
  
* How to deploy a completed react application to Netlify.

## What's Next 

We are looking foward to many new opportunities in the near future, including;

* Continuing to build small projects in order to level up on the skills we are learning at The Knowledge House.

<!-- BUILT WITH -->
## Built With 

This project was conceptualized by building wireframes and prototypes using Figma and Canva. We will build this project using React JS, JavaScript, and Tailwind CSS on the frontend over the next week. 

* [JavaScript](https://javascript.com)
* [ReactJS](https://reactjs.org)
* [Edamam API](https://developer.edamam.com/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Figma](https://www.figma.com/)
* [Canva](https://www.canva.com/) 
* [Img Shields](https://shields.io)
* [FontAwesome](https://fontawesome.com/)
* [Trello](https://www.trello.com/)

<!-- CONTACT -->
## Our Team

* Jahaziel Israel - [LinkedIn](https://www.linkedin.com/in/jahazielbenisrael/)
* Stephanie Pena - [LinkedIn](https://www.linkedin.com/in/stephanie-a-pe%C3%B1a-1132bb16a/)

## 📣Shoutout to the Tribe

> "If you want to go fast, go alone; but if you want to go far, go together." 

We honestly want to make a special thanks to The Knowledge House Volunteer and Mentor [Miguel Vacas](https://github.com/vacas), and the late-night Discord Crew {Julian, Shafee, Ayman} for their midnight co-working and debugging,  CSS hacking and teeth-grinding **repo resurrections** to make this (tiny) project possible.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/stephp23/Yumzie-App
[contributors-url]: https://github.com/stephp23/Yumzie-App
[forks-shield]: https://img.shields.io/github/forks/stephp23/Yumzie-App
[forks-url]: https://github.com/stephp23/Yumzie-App
[stars-shield]: https://img.shields.io/github/stars/stephp23/Yumzie-App
[stars-url]: https://github.com/stephp23/Yumzie-App
[issues-shield]: https://img.shields.io/github/issues/stephp23/Yumzie-App
[issues-url]: https://github.com/stephp23/Yumzie-App
[license-shield]: https://img.shields.io/github/license/stephp23/Yumzie-App
[license-url]: https://github.com/stephp23/Yumzie-App
[product-screenshot]: \src\components\images\img-3.jpg