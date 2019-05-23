# EDU CELL API


# API URL:
https://edu-cell.herokuapp.com

# AUTH ROUTES

* Register a User:

Method Url: https://edu-cell.herokuapp.com/api/auth/register
HTTP method: [POST]

* Login:

Method Url: https://edu-cell.herokuapp.com/api/auth/login
HTTP method: [POST]

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

Method Url: https://edu-cell.herokuapp.com/admin/
HTTP method: [POST]
    *Requires a name and a school_id

# STUDENT ROUTES

* Get all Students

Method Url: https://edu-cell.herokuapp.com/students
HTTP method: [GET]

* Get Student By ID

Method Url: https://edu-cell.herokuapp.com/students/:id
HTTP method: [GET]