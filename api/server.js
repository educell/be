const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const studentRouter = require('../students/student-router');
const schoolRouter = require('../schools/school-router');
const adminRouter = require('../admin/admin-router');
const workerRouter = require('../workers/worker-router');
const teacherRouter = require('../teachers/teacher-router');

const { authenticate } = require('../auth/protected_middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/students', authenticate, studentRouter);
server.use('/schools', authenticate, schoolRouter);
server.use('/admin', authenticate, adminRouter);
server.use('/worker', authenticate, workerRouter);
server.use('/teacher', authenticate, teacherRouter);


server.get('/', (req, res) => {
    res.send("3, 2, 1, SHOWTIME");
});

module.exports = server;