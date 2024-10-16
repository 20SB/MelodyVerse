<body>
    <h1>MelodyVerse Backend</h1>
    <p>The backend for MelodyVerse is built using Node.js and Express.js, providing APIs for user authentication including sign-up and login functionalities. It uses MongoDB for the database and JWT for secure user authentication.</p>
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
    <p>The backend of MelodyVerse handles user authentication by providing routes for user sign-up and login. It hashes passwords using bcrypt and generates JWT tokens for secure authentication.</p>
    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li><strong>Node.js</strong>: JavaScript runtime for server-side development.</li>
        <li><strong>Express.js</strong>: Web framework for Node.js.</li>
        <li><strong>MongoDB</strong>: NoSQL database for storing user data.</li>
        <li><strong>Mongoose</strong>: ODM for MongoDB and Node.js.</li>
        <li><strong>bcryptjs</strong>: Library for hashing passwords.</li>
        <li><strong>jsonwebtoken</strong>: Library for generating and verifying JWT tokens.</li>
        <li><strong>cors</strong>: Middleware for enabling CORS.</li>
    </ul>
    <h2 id="project-structure">Project Structure</h2>
    <pre><code>MelodyVerseBackend/
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── node_modules/
├── .gitignore
├── package.json
├── server.js
└── ...
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
            <pre><code>git clone https://github.com/20SB/MelodyVerse.git
cd server</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install
# or
yarn install</code></pre>
        </li>
        <li>Ensure MongoDB is running and accessible at <code>mongodb://localhost:27017/melodyverse</code> (or update the connection string in <code>server.js</code> accordingly).</li>
    </ol>
    <h2 id="running-the-project">Running the Project</h2>
    <ol>
        <li>Start the server:
            <pre><code>npm start
# or
yarn start</code></pre>
        </li>
        <li>The server will run on port 5000. Open your browser and navigate to <code>http://localhost:5000</code> to see the home page.</li>
    </ol>
    <h2 id="api-endpoints">API Endpoints</h2>
    <ul>
        <li><strong>GET /</strong>: Returns a welcome message.</li>
        <li><strong>POST /api/signup</strong>: Registers a new user. Expects <code>email</code> and <code>password</code> in the request body.</li>
        <li><strong>POST /api/login</strong>: Authenticates a user and returns a JWT token. Expects <code>email</code> and <code>password</code> in the request body.</li>
    </ul>
    
</body>
