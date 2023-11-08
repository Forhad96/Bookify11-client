# Bookify - Hotel Booking Web Application

Welcome to Bookify, a hotel booking web application that allows to book hotel rooms online. Users can browse, filter, and select from a variety of rooms, view room details and reviews, and make bookings with ease. Users can also cancel or update their bookings, post reviews for rooms they have booked, and view their booking history. The web application uses Firebase for user authentication and JWT for access control. The web application also has a stunning and responsive design, with animations, toast notifications, and environment variables.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Acknowledgments](#acknowledgments)
6. [Live Link](#live-link)

## Features

### Homepage Design

- The homepage showcases high-quality images and videos of hotel rooms and amenities.
- It displays a map of the hotel's location.
- Users can find special offers and promotions.
- Testimonials from previous users are featured.
- A newsletter signup option is available for users.

### User Authentication

- Users can create an account using their email and password.
- Alternatively, they can log in using Google authentication via Firebase.

### JWT Authentication

- Upon login, a JSON Web Token (JWT) is generated and stored on the client-side for secure authentication.
- The JWT token is sent with each API call and verified on the server side.
- Private routes are protected with JWT authentication to ensure only authenticated users can access certain sections of the app.

### Navigation Bar

- The navigation bar provides links to the "Rooms" page and the "My Bookings" page.
- The "My Bookings" page is only accessible to authenticated users.

### Rooms Page

- Displays a list of available rooms with images, prices, sizes, and review counts.
- Users can filter rooms by price range.
- Clicking on room images allows users to view detailed information and reviews.
- Users can also book rooms by selecting a date and confirming the booking summary.

### Room Details Page

- Shows the room description, price per night, size, availability, images, special offers, and reviews.
- Users can book the room directly from this page or post a review if they've booked the room previously.

### Booking Cancellation

- Users can cancel a booking up to one day before the booked date.
- The "My Bookings" page lists all current bookings, allowing users to cancel a booking by clicking on the "Delete" button and confirming the deletion.
- Users can also update the date of a booking up to one day before the booked date.

### Review System

- Users can post reviews for rooms they have booked, including a username, rating, comment, and timestamp.
- Reviews are displayed on the room details page for other users to read and consider.

### Access Control

- Users who are not logged in cannot book a room or post a review and will be redirected to the login page.

### 404 Page

- The 404 page features an exciting image and a "Back to home" button, redirecting users to the homepage.

### Toast Notifications

- The app uses toast notifications to provide meaningful feedback for all CRUD (Create, Read, Update, Delete) operations.

### Responsive Design

- The web application is designed to be responsive, ensuring a seamless experience on mobile, tablet, and desktop devices.

### Environment Variables

- The application uses environment variables to securely store sensitive information such as Firebase configuration keys and MongoDB credentials.

## Technologies Used

- Ripple UI
- Tailwind CSS
- Firebase
- JWT Token Authentication
- Express
- Dotenv (for environment variables)
- Swiper JS Slider
- React Router DOM
- React Date Picker

## Usage

- Explore the hotel rooms, view details, and book rooms.
- Log in or create an account to access the "My Bookings" page, post reviews, and manage your bookings.
- Experience a seamless and responsive design across various devices.
- Enjoy the convenience of JWT token authentication and toast notifications for user-friendly interactions.

## Installation

To run the Bookify application on your local machine, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/bookify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookify
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and set up your Firebase configuration keys.

5. Create a MongoDB database and configure the credentials.

6. Create a `.env` file in the root directory of the project and add your environment variables:

   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_MONGODB_URI=your-mongodb-uri
   ```

7. Start the application:

   ```bash
   npm start
   ```

The application should now be running locally on your machine.

## API Reference

### All Rooms

- **Endpoint**: http://localhost:3000/rooms
- **Description**: This endpoint retrieves a list of all available rooms.

### Filter Rooms by Price Range

- **Endpoint**: http://localhost:3000/rooms?minPrice=200&maxPrice=400
- **Description**: This endpoint allows users to filter rooms by price range. It returns rooms with prices falling within the specified minimum and maximum price values.

### Single Room

- **Endpoint**: http://localhost:3000/rooms/:id
- **Description**: This endpoint retrieves detailed information about a specific room based on its unique ID.

### Get All Bookings

- **Endpoint**: http://localhost:3000/bookings
- **Description**: This endpoint returns a list of all bookings made by users.

### Create Booking

- **Endpoint**: POST http://localhost:3000/bookings
- **Description**: This endpoint allows users to create a new booking by providing the necessary booking details.

### Add a New Review

- **Endpoint**: POST http://localhost:3000/rooms/:reviewId
- **Description**: Users can post a new review for a room by providing the room's unique ID and the review details.

### Update Availability

- **Endpoint**: PATCH http://localhost:3000/rooms/:id
- **Description**: This endpoint updates the availability and booked dates for a room. It is used when a user books a room.

### Delete Booking

- **Endpoint**: DELETE http://localhost:3000/bookings/:id
- **Description**: Users can delete a booking by providing the unique ID of the booking to be removed.

Please make sure to replace "http://localhost:3000" with the actual base URL where your application is deployed in the live environment. Additionally, ensure that appropriate error handling and security measures are implemented to protect your API endpoints in a production environment.

## Acknowledgments

We would like to thank the following open-source projects and libraries for their contributions to the development of Bookify:

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [JWT Authentication](https://jwt.io/)
- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Swiper JS](https://swiperjs.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Date Picker](https://reactdatepicker.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Live Link

You can access the live version of Bookify at [https://bookify-eight.vercel.app](https://bookify-eight.vercel.app).

Thank you for using Bookify. We hope you have a pleasant experience booking your hotel rooms and look forward to your feedback and suggestions for improvements.
