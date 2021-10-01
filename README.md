# capstone-project

## https://ivys-capstone.herokuapp.com

## Site description/How to 
Logiderm is a website dedicated to helping users take on skincare in a more data driven, analytical way. 

Users can select the types of concerns they have with their skin, 

![](https://i.imgur.com/VMGPmQH.png)

they can browse skincare products striated by category,

![](https://i.imgur.com/lbW9Sof.png)

and view pertinent details such as product ingredients. 

![](https://i.imgur.com/D0rnW3t.png)

They can also add those products to their “routines”, 

![](https://i.imgur.com/GU8ObBk.png)

which displays the products they’re using in their skincare and when those products are being used.
![](https://i.imgur.com/LD3rCnP.png)

## Application Overview
Logiderm is built on a React/Redux frontend with a python/SQLAlchemy backend.

## Front End Overview
Most of the logic for LogiDerm is done on the front end. I eager loaded data in the Redux store and grabbed the information I needed with React useStates.

### React
React was extremely useful for dynamically rendering the application, providing for a seamless user experience.

### Redux 


During my last project, I realized how useful a well organized Redux store could be. So for Logiderm, I tried to use the Redux store as much as possible. Spending the extra time to think through my state structure made accessing the data I needed easy and efficient.


##Backend Overview
I used Python and Flask SQLAlchemy to build out my backend.

###Python
For our capstone projects, we were given the choice between Express and Python for our backends. Two of my other projects utilized Express and I wanted to expand my knowledge of Python. 


For the purpose of this project, I wanted to make seeder data to (roughly) replicate the type of data I’ll be parsing through in the future. Python made this super easy with the python random module.


###Flask SQLAlchemy
This was my first project in which my database had many-to-many relationships. I had to create several helper tables and the Flask SQLAlchemy docs made the process pretty straightforward. 
