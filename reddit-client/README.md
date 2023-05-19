# App Reddit Client
> The application allow users to view and search posts and comments provided by the Reddit API.

Live demo [https://reddit-client_simonapiz.surge.sh/](https://reddit-client_simonapiz.surge.sh/). <!-- If you have the project hosted somewhere, include the link here. -->

## Screenshots
#### Preview Homepage
![preview home](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/864233ec-ad75-4679-8658-895c0ec1b7b2)

#### Preview Subreddit' page
![preview subreddit](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/d8edbd20-8146-4d34-ac30-96cc8479b63e)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Wireframes](#wireframes)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)

## General Information
Reddit is a website where people share links to articles, media and other things on the web. I use [Reddit's API](https://github.com/reddit-archive/reddit/wiki/JSON) to provide data to integrate into the application. The application will allow users to view and search posts and comments provided by the API.


## Technologies Used
- react: 18
- react-redux: 8
- redux: 4
- node: 18


## Features

- [x] Users can use the application on any device (desktop to mobile)
- [x] Users can use the application on any modern browser
- [x] Users can access your application at a URL
- [x] Users see an initial view of the data when first visiting the app
- [x] Users can search the data using terms
- [x] Users can filter the data based on categories that are predefined
- [x] Users are shown a detailed view (modal or new page/route) when they select an item
- [x] Users are delighted with a cohesive design system
- [ ] Users are delighted with animations and transitions
- [ ] Users are able to leave an error state
- [ ] Get 90+ scores on Lighthouse
  - We understand you cannot control how media assets like videos and images are sent to the client. It is okay to have a score below 90 for Performance if they are related to the media from Reddit.
- [ ] OPTIONAL: Get a custom domain name and use it for your application
- [ ] OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes
- [ ] OPTIONAL: Make your application a progressive web app

## Wireframes
> Draft

![pencil draft](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/341c2d20-7da0-4f27-bd0b-466e20296ec5)

> Desktop Homepage - low fidelity - with [figma](https://www.figma.com/)

![Desktop Homepage - Wireframe - low fidelity](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/2e4405ef-8f7e-48e2-ba67-7909372b36c9)
> Desktop Post detail page - low fidelity - with [figma](https://www.figma.com/)

![Desktop Post detail page - Wireframe - low fidelity](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/2a34b220-a36e-4824-938d-e01ec8112935)

> React Component Hierarchy - Homepage

![Homepage-gerarchia-componenti-react](https://github.com/SimonaPiz/ProjectRedditClient/assets/91121660/25a99513-bf0c-447e-93d6-bf7a6a4c33b6)


## Setup
To run this project, install it locally using npm:
```
$ cd ../[directory]
$ npm install
$ npm start
```

## Acknowledgements
This project comes from the [Codecademy's Front-End Engineer](https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/) course.
