<body>
    <h1>MelodyVerse</h1>
    <p>MelodyVerse is a web application that provides a platform for users to stream their favorite music. Users can sign up, log in, and manage their accounts, while enjoying a user-friendly interface and secure authentication mechanisms.</p>
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
        <li><a href="#features">Features</a></li>
    </ul>
    <h2 id="description">Description</h2>
    <p>MelodyVerse is designed to provide a seamless music streaming experience. The application includes user authentication features such as sign-up, login, and remember me functionality. It uses JWT for secure authentication and stores encrypted user credentials for the remember me feature.</p>
    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li><strong>React</strong>: Frontend library for building user interfaces.</li>
        <li><strong>React Router</strong>: Library for routing in React applications.</li>
        <li><strong>Axios</strong>: Promise-based HTTP client for making API requests.</li>
        <li><strong>CryptoJS</strong>: Library for encryption and decryption of user credentials.</li>
        <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for styling.</li>
        <li><strong>FontAwesome</strong>: Icon library for displaying icons.</li>
        <li><strong>Node.js &amp; Express.js</strong>: Backend framework (not included in this repository, assumed to be running separately).</li>
    </ul>
        <h2 id="project-structure">Project Structure</h2>
    <pre><code>MelodyVerse/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── useAuthRedirect.js
├── .gitignore
├── package.json
├── README.md
└── ...
</code></pre>
        <h2 id="setup-and-installation">Setup and Installation</h2>
        <h3 id="prerequisites">Prerequisites</h3>
    <ul>
        <li>Node.js (v14.x or higher)</li>
        <li>npm (v6.x or higher) or yarn (v1.x or higher)</li>
        <li>A running backend server (assumed to be at <code>http://localhost:5000</code> for API requests)</li>
    </ul>
        <h3 id="installation">Installation</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/MelodyVerse.git
cd MelodyVerse</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install
# or
yarn install</code></pre>
        </li>
    </ol>
        <h2 id="running-the-project">Running the Project</h2>
    <ol>
        <li>Start the development server:
            <pre><code>npm start
# or
yarn start</code></pre>
        </li>
        <li>Open your browser and navigate to <code>http://localhost:3000</code>.</li>
    </ol>
        <h2 id="features">Features</h2>
    <ul>
        <li><strong>User Authentication</strong>: Sign-up, login, and logout functionalities with JWT-based authentication.</li>
        <li><strong>Remember Me</strong>: Option to remember user credentials using local storage with encryption.</li>
        <li><strong>Responsive Design</strong>: Fully responsive design using Tailwind CSS.</li>
        <li><strong>Secure</strong>: Passwords and tokens are securely handled and encrypted.</li>
    </ul>
    
</body>
