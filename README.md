# Reversetagram
### _a content aggregate of images you want_

Reversetagram is a tool designed to make requests for images that you've been wanting but don't necessarily have enough of. Eventually, we'll be feeding these images with their assigned categories into an AI so that it can learn how to make images of its own.

_______________

#### Technologies Used

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

______________

#### Getting Started

[click here to join the site](https://francis-project-two.herokuapp.com/)

_____________

#### How I got here

I used Mongoose to demonstrate full CRUD functionality on my MongoDB Atlas database. A user should be able to make a post (create), then other users can respond with their pictures onto that post (read/create). On those images, a comment thread can form. Similar to any comment thread, I've given users the functionality to edit (update) and (delete) their own comments. I've also given users who have posted the picture the ability to delete possibly inflammatory comments on their beloved picture. Below are the wireframe and user stories.

![wireframe](/public/images/wireframe.png)

![userstories](/public/images/userstories.jpeg)

_____________

#### Future Features

As seen in the user stories above, there is still so much more to add to this forum. A table may not be the best use for a landing page, and I will confer with a UX designer to streamline that page, along with other pages as well. But more importantly, unlimited ratings are allowed right now. On top of that, while categories right now are unique, I want to be able to store them in a separate schema, so we can properly access and store history. Additionally, I want the default view of the data to be sorted by new.