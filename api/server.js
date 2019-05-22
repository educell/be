const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const studentRouter = require('../students/student-router')

const protected = require('../auth/protected_middleware')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/students', studentRouter)

server.get('/students', (req, res) => {
    res.send("anyone?")
})

server.get('/', (req, res) => {
    res.send("3, 2, 1, SHOWTIME");
});

module.exports = server;