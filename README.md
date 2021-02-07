# Instruction for creating a vue application with a CI/CD pipeline, hosted on Heroku

## What you'll need installed

- node/npm
- gcloud cli

---

## Creating the Vue application

```shell
npm install -g @vue/cli
vue create app_name
```

Follow the command line instructions. Add whatever you'd like to the application.
Navigate into the application and install the following dependencies:

```shell
cd app_name
npm install @vue/cli-plugin-unit-jest
npm install @vue/test-utils
```

Build and run the app to make sure everything works

```shell
npm run build
npm run serve
```

Navigate to localhost:8080 in the browser to view the application.

### Setup a git repository

Create a new git repo

---

## CI/CD With Github Actions and Heroku

### Setup the heroku app

Start by downloading the heroku CLI application

Linux:

```shell
sudo span install --classic heroku
```

macOS:

```shell
brew tap heroku/brew && bre install heroku
```

Make sure to login to heroku via the cli with:

```shell
heroku login
```

