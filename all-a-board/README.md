# <center>All A-Board</center>

## Intro
This is a full stack web app developed as part of my time studying at Northcoders. The back end is hosted via Heroku [here](https://beegee-api.herokuapp.com/) and the front end is live [here](https://danmossdev.github.io/all-a-board).

The backend uses Node.js, Express, and PostgreSQL to seed, store, and dispense data based on a variety of requests which can be seen at the /api endpoint. The front end is built with React and CSS and aims to provide a fully responsive, accessible, and user friendly experience, making use of React Router, custom hooks, optimistic rendering with user feedback, media queries and semantic HTML to achieve this.

## What Actually Is It?
All A-Board is a site on which users can see reviews for various board games, leave comments on these reviews and up/down vote them. In practise, there is no functionality to create a user (yet), nor to post a review; however it was constructed to satisfy user stories provided as part of the assignment. As of right now, users are prompted to select an existing user and can then navigate throughout the existing reviews, from there they can vote on reviews, vote on comments, post new comments and delete any comments posted by themselves.

## Some techincal stuff
The backend was constructed using the MVC pattern, and built according to test driven principles using Jest and Supertest. Git source control was used to create branches and implement new features before having them signed off on by tutors and merged into the development build.
Built with Node version v16.15.1 in mind, should you want to use the project yourself simply clone this project to your system:
```
git clone https://github.com/DanMossDev/all-a-board.git
```

install dependencies using:
```
npm install
```
Host the project locally using:
```
npm start
```

If you want to access or modify the back end in any way, it can be accessed [here](https://github.com/DanMossDev/board-game-api) and hosted however you see fit; I personally recommend Heroku - further instructions available in that repo's README.

Thanks!