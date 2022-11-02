# Welcome to Git For Geeks2 contributing guide

Thank you for investing your time in contributing to  Git For Geeks2!

This guide aims to provide an overview of the contribution workflow to help us make the contribution process effective for everyone involved.

## About the Project

The website is made for DJCSI's Git For Geeks Second Commit workshop to demonstrate Github Workflow.

Read the [README](README.md) to get an overview of the project.

## Getting Started

Below are the steps to follow to contribute to this project:

**1.** Fork [this](https://github.com/CSI-DJSCE/Git-For-Geeks2) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/Git-For-Geeks2.git
```

where `your_user_name` is your GitHub username.

**3.** Navigate to the project directory.

```
cd Git-For-Geeks2
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/CSI-DJSCE/Git-For-Geeks2.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository). Feel free to raise new issues.

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Make necessary changes and commit those changes

**9.** Track your changes.

```
git add .
```

**10.** Commit your changes .

```
git commit -m "bla bla bla"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `Compare & pull request`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create pull request`.

**15.** Congrats!! 🎉  you are done creating a pull request to this project. 

**16.**  After this, the maintainers will review the PR and will merge it if it helps move the project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase. 
