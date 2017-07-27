# React Immersive Code Challenge

## Instructions

For this project, you’ll be building out a React application that displays a list of student grades.

Part of what this code challenge is testing is your ability to follow given instructions. While you will have some freedom in how you implement the features, be sure to carefully read the directions and follow the steps in order to build the application. You will be assessed based on how many of the deliverables you complete and _completing them out of order will result in a lower score_.

## Setup
1) First fork and clone down the backend repository and get the API running locally. The repo and directions to run it locally can be found here:
https://github.com/learn-co-students/immersive-assessment-react-alt-first-round-backend-web-051517
2) Fork and clone this repository.
3) After cloning down the project, run `npm install`.
4) You can boot up the server with `npm start`. It will run on `localhost:3000`.
5) The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Deliverables

When you clone down this project, the component `<ClassContainer />` will have an initial default state.  Use this data to get the students rendering.  Once that is complete, you can replace that initial students state with data you fetch from the API.

The endpoints you need to hit are:
- Get: http://localhost:3001/courses/:id
- Post: http://localhost:3001/students/:id

Below are the deliverables you should create. _Please complete this list in order, as you will be graded based on how many of these are completed_.

1) Get the list of students to display on the page given the default state data.
2) Ensure that the dropdown course menu updates the state. You should also show the name of the current course as a header in CourseContainer.
3) After that is working, update the students state with the JSON you fetch from the endpoint for each course: http://localhost:3001/courses/:id. Make sure you know how the data you receive from the API is structured.
5) Make student information editable using the edit form.
6) On submit, persist the updated student information to the API using a post request to http://localhost:3001/students/:id. The updated student information should also be reflected on the front end.

![example project](public/app.gif)

Use the above gif as an example of how the app should function.

## Criteria

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app reasonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a dropdown menu that responds to changes and calls this.setState? If an individual student is updated, does the state reflect that change?
- **API:** Does the app make an AJAX request to the API and return data? Does the update API call correctly persist student changes in the back end?
- **Best Practices:** Does the app follow best practices regarding state and component composition? Is code structured cleanly? Are functions defined in the components they are most related to?


Good luck!
