# ProjectRedditClient
>es by Codecademy

## Overview

For this project, you will build an application for Reddit using everything you’ve learned, including React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which you will integrate into your application. The application will allow users to view and search posts and comments provided by the API.

### Example Project
[Reddit client example](https://reddit-client.netlify.app/)
![Reddit client example](https://user-images.githubusercontent.com/91121660/168837208-a7d87d9b-2808-4489-a0b8-63edd66487da.png)

## Project Requirements:
- Build the application using React and Redux

- Version control your application with Git and host the repository on GitHub

- Use a project management tool (GitHub Projects, Trello, etc.) to plan your work

- Write a README (using Markdown) that documents your project including:

  - Wireframes
  - Technologies used
  - Features
  - Future work
- Write unit tests for your components using Jest and Enzyme

- Write end-to-end tests for your application

- Users can use the application on any device (desktop to mobile)

- Users can use the application on any modern browser

- Users can access your application at a URL

- Users see an initial view of the data when first visiting the app

- Users can search the data using terms

- Users can filter the data based on categories that are predefined

- Users are shown a detailed view (modal or new page/route) when they select an item

- Users are delighted with a cohesive design system

- Users are delighted with animations and transitions

- Users are able to leave an error state

- Get 90+ scores on Lighthouse

  - We understand you cannot control how media assets like videos and images are sent to the client. It is okay to have a score below 90 for Performance if they are related to the media from Reddit.
- OPTIONAL: Get a custom domain name and use it for your application

- OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes

- OPTIONAL: Make your application a progressive web app

## Prerequisites:
- HTML
- CSS
- JavaScript
- React
- Redux
- Jest, Enzyme, and Selenium
- Git and GitHub
- Command line and file navigation
- Wireframing

## Setup

You will be doing this project outside of the Codecademy platform, on your own computer.

### Reddit API
For this project, we will be using the [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). There is no maintained documentation but the API is simple enough to use. We will provide you with some pointers on how to use it.

Note that Reddit has 2 APIs: the [official API](https://www.reddit.com/dev/api/) and an [undocumented JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). You are welcome to use either APIs but we recommend using the JSON API because it doesn’t require an OAuth workflow. Using the JSON API does have limitations such as no write operations. For the purposes of this project, we find the JSON API adequate.

The Reddit API will return some user content (comments) in Markdown. You should find a way to display the Markdown in your application.
