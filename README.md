# Creating a vue application with a CI/CD pipeline, hosted on Heroku

## What you'll need

- [Node](https://nodejs.org/en/download/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli/)
- A Github repository
- A Heroku Account and project.

---

### The Plan

Our plan is to automatically build, test and if testing passes, deploy.
To do this, we will use Jest, a Javascript testing framework, to test our code.
The tests (and builds) need to be run somewhere, so we'll use Github Actions as our automated test and build server.
Finally, the application will be somewhere on Heroku.

Everything you need to get started with your CI/CD pipeline can be found in this project. This should be all smooth sailing.

---

## Creating the Vue application

```shell
npm install -g @vue/cli
vue create app_name
```

Follow the command line instructions. Add whatever you'd like to the application.
Navigate into the application and

---

Build and run the app to make sure everything works

```shell
npm run build
npm run serve
```

Navigate to localhost:8080 in the browser to view the application.

### Setup a git repository

Create a new git repository in github and initialize the git project locally.
If you don't already have a github account, you can make one for free at [github](https://github.com/)

```shell
git init
git remote add origin <remote-url>
git branch -M main
git add .
git push -u origin main
```

---

## CI/CD With Github Actions and Heroku

### Setup the heroku app

After creating an app on heroku, come back to your terminal.

```shell
heroku login
heroku git:remote -a <app-name>
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
```
---

### Setup project secrets

In your heroku account settings, find your api key. Reveal it and copy it. In your github project settings, click secrets. Add a new repository secret named HEROKU_API_KEY. Paste the key you copied into the value field and save it.

Then, add a new repository secret named HEROKU_APP_NAME. Set the value to be the same as the name you chose for your heroku app and save it.

### Setup a Github Action

With Github actions, we can easy build, test, and deploy our application.
To initiate an action, we need to setup a `workflow` configuration. We can define these under `.github/workflows/` from the root of the project:

```shell
mkdir -p .github/workflows
touch .github/workflos/ci.yaml
```

Open this file in your editor and we'll get started.

---

### The Workflow YAML

ci.yaml is where you define your `workflow`. Using the `YAML` syntax, we can define things like `event triggers`, `jobs`, `environment varialbes` and more. A workflow can be made up of one or more jobs. Using `contexts`, we can access information about workflow runs, environments, jobs, steps, etc.

There's a lot of power in these YAML configurations. It might benefit you to take a look at the [workflow YAML syntax documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)

To start, we'll define a name. This will be visible in the Github Actions tab when the workflow runs.

```yaml
name: my_ci_cd_workflow
```

Next, we need to define our events. These will tell github when the workflow should run.
In our case, we want to run the workflow anytime anyone pushes or makes a pr into the main branch.

```yaml
on:
  push:
    branches:
      - main
  
  pull_request:
    branches:
      - main
```

Perfect! We have a workflow named my_ci_cd_workflow that will run on any push or pull request to main.

But this isn't very useful without any jobs. We can setup some jobs by adding the label of the same name. Each job needs an id to associate with the job. It can be anything really, in this case, we'll just call it build.

```yaml
jobs:
  build:
```

This is the real meat and potatoes of the workflow. Here, we can define our environment, and each step of the job.

In order for a job to run, we need to setup an environment for the project to run on. To do this, we simply say:

```yaml
runs-on: ubuntu-latest #os
```

This will grab the latest version of the specified OS. This could be an Ubuntu, macOS, or Windows Server machine. [Github runs-on docs](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)

Now, we can define our steps. Reusing actions is a common theme in workflows which is why we're going to do just that.

Remembering our goal for this pipeline, we need to find a way to build, test, and deploy our project. But how does Github Actions get our code? By checking it out!

We can use actions/checkout@v2 to do this:

```yaml
steps:
- uses: actions/checkout@v2
  with:
    fetch-depth: 0 # Fixes shallow update issue when pushing to heroku
```

This is the first step of our workflow. It checks out the main branch. Thats it!
Notice the configurability though. In most cases, we can provide a `with` tag to specify some arguments for the current step. In this case, we fixed an issue that shows up later on when pushing to heroku.

We have our code, now we can run the rest of our steps.
We need to set up node so the project can install/build/test.
Another action is available for this:

```yaml
- uses: actions/setup-node@v2
  with:
    node-version: '14'
```

Now we can add the rest of our steps. The final YAML file should look like this:

```yaml
name: LayingPipe

on: 
  push:
    branches:
      - main

  pull_request:
    branches:
      -main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
      with:
        fetch-depth: 0
    - uses: actions/setup-node@v2
      with:
          node-version: '14'
    - name: npm install
      run: |
        npm install

    - name: npm build
      run: npm build --if-present

    - name: npm test
      id: tests
      run: |
        npm test --passWithNoTests
      env:
        CI: true

    - name: Add heroku remote
      if: ${{success()}}
      run: |
        echo Success
        git remote add heroku https://heroku:${{ secrets.HEROKU_API_KEY }}@git.heroku.com/${{ secrets.HEROKU_APP_NAME }}.git

    - name: Deploy to heroku
      run: |
        git push heroku HEAD:main -f
```

To quickly go through each step, we build the project, then run tests with a flag to pass if no tests are in the project. This makes it so the pipeline won't fail if no tests are present.

We also created an Environment variable on the test job. This sets the varialbe `CI` to the value `true` to inform jest we are running in a CI environment.

After, we add the heroku remote and deploy. You may spot a few new things: the `if` tag, and the `${{secrets.HEROKU_API_KEY}}` in the heroku url.

The `if` tag allows us to specify a precondition that must be met for the step to execute. In this case, we use the success method to check the previous steps outcome.

The `${{secrets}}` uses the secrets context fed in by Github. Each secret can be created in the Secrets tab under the project settings.

The two secrets we need to add are the Heroku api key, and the Heroku project name.
The api key can be retrived from your account settings on Heroku.

Once this is all setup, we should be able to just push to github.
The app will be checked-out, built, tested and (as long as tests pass), everything will be pushed to heroku. Navigate to your apps url to see your hard work! (after the pipeline finishes).
