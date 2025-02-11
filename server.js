require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5673;
const cors = require('cors');
app.use(cors());


// Mock user data for demonstration
const mockUser = {
  username: 'Admin',
  password: 'Cybersecurity'
};
const secret_text ={
  secret_key: 'SuperSecretKey',
}

// Middleware
app.use(bodyParser.json());

// Login route
app.post('/hype354789636', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (username === mockUser.username && password === mockUser.password) {
    return res.status(200).json({ message: 'Login successfully! Your secret key is: SuperSecretKey' });
  } else {
    return res.status(200).json({ message: 'Invalid username or password.' });
  }
});

// Text posting route  
app.post('/', (req, res) => {
  const { secret_key } = req.body;
  if (!secret_key) {
    return res.status(400).json({ message: 'Text content is required.' });
  }
  if(secret_key === secret_text.secret_key)
    return res.status(201).json({ message: 'Your approach is wrong. I can not give you the flag'});
  else
  return res.status(401).json({ message: 'Invalid secret key.' });
});

app.put('/', (req, res) => {
  const { secret_key } = req.body;
  if (!secret_key) {
    return res.status(400).json({ message: 'Text content is required.' });
  }

  if (secret_key === secret_text.secret_key) {
    return res.status(200).json({ message: 'Your flag is: RCSC{P0st_r3q_4R3_Fun_379479}' });
  } else {
    return res.status(401).json({ message: 'Invalid secret key.' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
