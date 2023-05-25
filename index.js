const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000

app.use(express.static(__dirname + '/pages/challenge_ch3_Syahrial/assets/css'))
app.use(express.static(__dirname + '/pages/challenge_ch3_Syahrial/assets/images'))
app.use(express.static(__dirname + '/pages/challenge_ch4_Syahrial/assets/css'))
app.use(express.static(__dirname + '/pages/challenge_ch4_Syahrial/assets/images'))
app.use(express.static(__dirname + '/pages/challenge_ch4_Syahrial/assets/js'))

//Routing
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div>
      <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.redirect('/beranda');
  } else {
    res.send('Username atau Password Salah!');
  }
});

// Set up the home route
app.get('/beranda', (req, res) => {
    res.sendFile(__dirname + '/beranda.html')
});

app.get('/chapter3', (req, res) => {
    res.sendFile(__dirname + '/pages/challenge_ch3_Syahrial/index.html')
})
app.get('/chapter4', (req, res) => {
    res.sendFile(__dirname + '/pages/challenge_ch4_Syahrial/index.html')
})
app.get('*', (req, res) => {
    res.status(404).send('Request Not Found !')
})

app.listen(PORT, ()=>{
    console.log(`Server berjalan di Port: ${PORT}`)
})