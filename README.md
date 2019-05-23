# EDU CELL API


# API URL:
https://edu-cell.herokuapp.com

# AUTH ROUTES

* Register a User:

Method Url: https://edu-cell.herokuapp.com/api/auth/register
HTTP method: [POST]
    * Requires username and password

* Login:

Method Url: https://edu-cell.herokuapp.com/api/auth/login
HTTP method: [POST]
    * Requires username and password


# SCHOOL ROUTES 

* Add a School: 

Method Url: https://edu-cell.herokuapp.com/schools 
HTTP method: [POST]
    *Requires a name

* Get all Schools

Methon Url: https://edu-cell.herokuapp.com/schools
HTTP method: [GET]

* Get a School by ID

Method Url: https://edu-cell.herokuapp.com/schools/:id
HTTP method: [GET]

* Get Admins from Specific School

Method Url: https://edu-cell.herokuapp.com/schools/:id/admin
HTTP method: [GET]


# ADMIN ROUTES

* Get all Admins

Method Url: https://edu-cell.herokuapp.com/admin
HTTP method: [GET]

* Get Admin by ID

Method Url: https://edu-cell.herokuapp.com/admin/:id
HTTP method: [GET]

* Add an Admin

Method Url: https://edu-cell.herokuapp.com/admin
HTTP method: [POST]
    *Requires a name and a school_id


# WORKER ROUTES

* Get all Workers

Method Url: https://edu-cell.herokuapp.com/worker
HTTP method: [GET]

* Get Worker by ID

Method Url: https://edu-cell.herokuapp.com/worker/:id
HTTP method: [GET]

* Add a Worker

Method Url: https://edu-cell.herokuapp.com/worker
HTTP method: [POST]
    * Requires a name and an admin_id
    * notes are optional


# TEACHER ROUTES

* Get all Teachers

Method Url: https://edu-cell.herokuapp.com/worker
HTTP method: [GET]

* Get Teacher by ID

Method Url: https://edu-cell.herokuapp.com/worker/:id
HTTP method: [GET]

* Add a Teacher

Method Url: https://edu-cell.herokuapp.com/worker
HTTP method: [POST]
    * Requires a name and an admin_id
    * notes are optional


# STUDENT ROUTES

* Get all Students

Method Url: https://edu-cell.herokuapp.com/students
HTTP method: [GET]

* Get Student By ID

Method Url: https://edu-cell.herokuapp.com/students/:id
HTTP method: [GET]

* Add a Student

Method Url: https://edu-cell.herokuapp.com/students
HTTP method: [POST]
    * Requires a name, age, grade, backgroundStory, status, insuranceCard(boolean), insuranceExpiration, birthCertificate, representative, contactInfo, worker_id, and teacher_id
    * insuranceExpiration, specialNeeds are optional