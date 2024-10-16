
<body>
    <h1>MelodyVerse</h1>
    <p>MelodyVerse is a full-stack web application that provides a platform for users to stream their favorite music. The project consists of a frontend built with React and a backend built with Node.js and Express.js. Users can sign up, log in, and manage their accounts securely.</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#setup-and-installation">Setup and Installation</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
            </ul>
        </li>
        <li><a href="#running-the-project">Running the Project</a></li>
        <li><a href="#api-endpoints">API Endpoints</a></li>
    </ul>
    <h2 id="description">Description</h2>
    <p>The MelodyVerse application allows users to register and log in to access music streaming features. The backend is responsible for user authentication, while the frontend provides a user-friendly interface for interaction.</p>
    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong>
            <ul>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>React Router: For handling routing in the application.</li>
                <li>Axios: For making HTTP requests to the backend.</li>
                <li>Tailwind CSS: For styling the application.</li>
            </ul>
        </li>
        <li><strong>Backend:</strong>
            <ul>
                <li>Node.js: JavaScript runtime for server-side development.</li>
                <li>Express.js: Web framework for Node.js.</li>
                <li>MongoDB: NoSQL database for storing user data.</li>
                <li>Mongoose: ODM for MongoDB and Node.js.</li>
                <li>bcryptjs: Library for hashing passwords.</li>
                <li>jsonwebtoken: Library for generating and verifying JWT tokens.</li>
                <li>cors: Middleware for enabling CORS.</li>
            </ul>
        </li>
    </ul>
    <h2 id="project-structure">Project Structure</h2>
    <pre><code>MelodyVerse/
├── client/                   # Frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js            # Main application component
│   │   └── index.js          # Entry point
│   ├── package.json
│   └── ...
└── server/                   # Backend application
    ├── models/
    │   └── User.js           # Mongoose User model
    ├── routes/
    │   └── authRoutes.js     # Authentication routes
    ├── node_modules/
    ├── package.json
    └── server.js             # Main server file
</code></pre>
    <h2 id="setup-and-installation">Setup and Installation</h2>
    <h3 id="prerequisites">Prerequisites</h3>
    <ul>
        <li>Node.js (v14.x or higher)</li>
        <li>npm (v6.x or higher) or yarn (v1.x or higher)</li>
        <li>MongoDB (running locally or on a remote server)</li>
    </ul>
    <h3 id="installation">Installation</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/MelodyVerse.git
cd MelodyVerse</code></pre>
        </li>
        <li>Navigate to the server directory and install dependencies:
            <pre><code>cd server
npm install</code></pre>
        </li>
        <li>Navigate to the client directory and install dependencies:
            <pre><code>cd ../client
npm install</code></pre>
        </li>
        <li>Ensure MongoDB is running and accessible at <code>mongodb://localhost:27017/melodyverse</code> (or update the connection string in <code>server.js</code> accordingly).</li>
    </ol>
    <h2 id="running-the-project">Running the Project</h2>
    <ol>
        <li>Start the backend server:
            <pre><code>cd server
npm start</code></pre>
        </li>
        <li>Start the frontend development server:
            <pre><code>cd client
npm start</code></pre>
        </li>
        <li>The frontend will run on port 3000, and the backend will run on port 5000. Open your browser and navigate to <code>http://localhost:3000</code> to access the application.</li>
    </ol>
    <h2 id="api-endpoints">API Endpoints</h2>
    <ul>
        <li><strong>GET /</strong>: Returns a welcome message.</li>
        <li><strong>POST /api/signup</strong>: Registers a new user. Expects <code>email</code> and <code>password</code> in the request body.</li>
        <li><strong>POST /api/login</strong>: Authenticates a user and returns a JWT token. Expects <code>email</code> and <code>password</code> in the request body.</li>
    </ul>
    
</body>
