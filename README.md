# EDU CELL API

# INSTALLATION

Fork and clone the repository. In the same directory as the package.json, run yarn install in your terminal:

`yarn install`

To start the server, run: 

`yarn server`

To set up testing environment, run:

`yarn test`


# API URL:
https://edu-cell.herokuapp.com

# AUTH ROUTES

| Name          | Method        | Endpoint                                         |
| ------------- |:-------------:| ------------------------------------------------:|
| Register      | POST          | https://edu-cell.herokuapp.com/api/auth/register |
| Login         | POST          | https://edu-cell.herokuapp.com/api/auth/login    |

* Register a User:
    * Requires username and password

* Login:
    * Requires username and password


# SCHOOL ROUTES 

| Name              | Method        | Endpoint                                          |
| ----------------- |:-------------:| :------------------------------------------------:|
| Add a School      | POST          | https://edu-cell.herokuapp.com/schools            |
| Get Schools       | GET           | https://edu-cell.herokuapp.com/schools            |
| Get School by ID  | GET           | https://edu-cell.herokuapp.com/schools/:id        |
| Get Admins        | GET           | https://edu-cell.herokuapp.com/schools/:id/admin  |
| Delete a School   | DELETE        | https://edu-cell.herokuapp.com/schools/:id        |
| Update School     | PUT           | https://edu-cell.herokuapp.com/schools/:id        |

* Add a School: 
    * Requires a name


# ADMIN ROUTES

| Name              | Method        | Endpoint                                          |
| ----------------- |:-------------:| :------------------------------------------------:|
| Add an Admin      | POST          | https://edu-cell.herokuapp.com/admin              |
| Get Admins        | GET           | https://edu-cell.herokuapp.com/admin              |
| Get Admin by ID   | GET           | https://edu-cell.herokuapp.com/admin/:id          |


* Add an Admin
    * Requires:
        * name 
        * school_id


# WORKER ROUTES

| Name              | Method        | Endpoint                                          |
| ----------------- |:-------------:| :------------------------------------------------:|
| Add a Worker      | POST          | https://edu-cell.herokuapp.com/worker             |
| Get Workers       | GET           | https://edu-cell.herokuapp.com/worker             |
| Get Worker by ID  | GET           | https://edu-cell.herokuapp.com/worker/:id         |


* Add a Worker
    * Requires:
        * name
        * admin_id
    * Optional: 
        * notes


# TEACHER ROUTES

| Name                | Method        | Endpoint                                           |
| ------------------- |:-------------:| :-------------------------------------------------:|
| Add a Teacher       | POST          | https://edu-cell.herokuapp.com/teacher             |
| Get Teachers        | GET           | https://edu-cell.herokuapp.com/teacher             |
| Get Teacher by ID   | GET           | https://edu-cell.herokuapp.com/teacher/:id         |

* Add a Teacher
    * Requires:
        * name
        * admin_id
    * Optional:
        * notes


# STUDENT ROUTES

| Name               | Method        | Endpoint                                           |
| ------------------ |:-------------:| :-------------------------------------------------:|
| Add a Student      | POST          | https://edu-cell.herokuapp.com/students            |
| Get Students       | GET           | https://edu-cell.herokuapp.com/students            |
| Get Student by ID  | GET           | https://edu-cell.herokuapp.com/students/:id        |
| Delete a Student   | DELETE        | https://edu-cell.herokuapp.com/students/:id        |
| Update Student     | PUT           | https://edu-cell.herokuapp.com/students/:id        |

* Add a Student
    * Requires 
        * name 
        * age 
        * grade
        * backgroundStory
        * status
        * insuranceCard(boolean)
        * insuranceExpiration
        * birthCertificate
        * representative
        * contactInfo
        * worker_id
        * teacher_id
    * Optional:
        * insuranceExpiration
        * specialNeeds 
