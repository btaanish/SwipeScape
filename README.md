# SwipeScape

Welcome to **SwipeScape**! This application offers a visually engaging way to browse through images using a card-swiping interface. Inspired by popular social apps, SwipeScape provides a sleek and interactive user experience, focusing on the fun of swiping through images.

## Features

- **Swipeable Cards**: Enjoy a seamless and intuitive swiping experience on images of people.
- **Dynamic Interface**: Built with React, CSS, and HTML for a responsive and attractive frontend.
- **Robust Backend**: Powered by Node.js and Express.js, ensuring efficient data handling and processing.
- **NoSQL Database**: Utilizes MongoDB, a NoSQL database, for flexible and scalable data storage.
- **Deployment**: Frontend hosted on Firebase and backend deployed on Heroku for smooth and fast access.

## Technical Overview

### Frontend

- **React**: Our frontend is developed using React, a powerful JavaScript library for building user interfaces.
- **Styling**: The application features custom CSS and HTML for styling, ensuring a modern and user-friendly design.
- **Icons**: Includes intuitive icons for actions like liking an image, enhancing the user experience.

### Backend

- **Node.js and Express.js**: The backend is built with Node.js and Express.js, providing a robust and scalable server environment.
- **NoSQL Database (MongoDB)**: We use MongoDB, a NoSQL database, to handle our data storage needs, offering flexibility and performance for our data storage.
- **API Endpoints**: The server exposes several API endpoints to manage image data and user interactions.

### Deployment

- **Firebase**: The frontend is hosted on Firebase, taking advantage of its powerful hosting capabilities.
- **Heroku**: The backend is deployed on Heroku, ensuring a reliable and scalable server infrastructure.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/swipescape.git
   cd swipescape
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start MongoDB**:
   ```bash
   mongod
   ```

2. **Run the backend server**:
   ```bash
   cd backend
   npm start
   ```

3. **Run the frontend server**:
   ```bash
   cd ../frontend
   npm start
   ```

4. **Access the app**: Open your browser and navigate to `http://localhost:3000`

## Contributing

We welcome contributions to enhance the app. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License.
