# Final Process Improvement Activity

Hello, team. This repository will be used for the final PIA. As mentioned, this is required from me as a coach of your team as per ASEP Coursework, but is also very beneficial to you and your dissertation in Team Project.

The outcomes for this activity are:

* Getting comfortable with the technologies chosen for your project (mostly Django)
* Improve code reviews
* Setup testing

## Task

As before, you may or may not have direct access as a team member to **this** repository, but you should be able to create issues and fork the repository. This activity involves a browser extension (in React - not too important) that would interact with a Django backend using APIs. This browser extension is a calculator, that would send requests to the server based on the operations. A sample operation (root) has already been implemented.

Create an issue to start with, for yourself, with the title "Add operation [operation name]", also **choosing the right issue template** which should be filled in appropriately. The workflow would be similar as last time - you would tackle this issue and create a merge request.

Once the issue has been created, clone/fork the repository and start implementing where appropriate. Refer to the sample operation in the backend and the frontend (extension) - you have to do the same; this will be crazy easy if you follow what is given.

Once you think that is working well, you need to write a few tests for this, and you're ready to create a merge request (remember to lint!). The pipeline should test automatically, but we will do code reviews as well.

## Setup

### Django

```sh
# Create a virtual environment, and then..
$ pip install -r requirements-dev.txt
$ python manage.py runserver
```

### React

```sh
$ npm install   # yarn would've been preferred
$ npm start
```
