# Contributing to RV_Root

This documents serves to outline:

 - The workflow describing how to make changes to the RV_Root codebase
 - How to address bugs
 - How to propose and manage features, both in-progress and planned
 - Managing work assignment
 - Where discussion relating to the codebase takes place
 
## Developer Workflow

Developers should use GitHub's project management tools (Projects, Issues, Pull Requests) generously, to track and assign work, as well as manage features and bugs. 

For each feature, a new branch should be created, and in order to contribute that code to the master branch a pull request should be opened, where feedback and review can take place. 

Issues should be created for both bugs and features, and Pull Requests should close the issues, or manually if for other circumstances.

Issues should be tagged appropriately, to maintain order and other's sanity when trying to filter issues when looking for work. 

If you would like to start working on an issue, feel free to assign yourself to an issue, to let other people know that you are currently working on it.
This is to make sure that multiple people don't work on the same issue at the same time, unknowingly.

Commits that fix issues should mention and close the issues themselves, and committing directly to master is discouraged, because it causes issues with colliding commits and makes it difficult to do clean code review.

Pull requests should outline broad changes in the code, and show usage of new features. 
If you have specific thoughts about a pull request or issue, it is encouraged to use the comments section.

### Review

It's strongly encouraged to review pull requests to be merged. There are still many things to be decided on how review should be enforced and how it should take place. Things to discuss:

 - Should a reviewer be required to merge pull requests?
 - Should a continuous integration tool be used?

### Discussion

Pull Requests and Issues both have comment sections where changes can be proposed as well as discussed. People can be tagged, and questions can be asked about topics relevant to the issue or PR.

## Introduction to Project Management Tools
 
### Projects

[GitHub projects](https://help.github.com/articles/about-project-boards/) are used to track issues and pull requests on a kanban-style board for visualization and prioritization of work. 
There can be multiple projects per repository, and are typically used for longer term roadmaps and feature plans. 
GitHub issues are used to track in-progress work on project boards. 
Notes can be created on boards as well, and can be turned into issues at a later date. 
Projects are also a great way to show project progress to non-developers.
 
### Issues

[GitHub Issues](https://guides.github.com/features/issues/) should be used for creating development tasks. 
This includes both features to-do as well as bugs. Each GitHub Issue can have an assignee, as well as a description and comments for the issue. 
Issues are [typically closed by pull requests](https://blog.github.com/2013-05-14-closing-issues-via-pull-requests/) or [commits](https://blog.github.com/2013-01-22-closing-issues-via-commit-messages/) and are also used in GitHub Projects. 
Issues can also have [task lists](https://help.github.com/articles/about-task-lists/) to show what is the current progress on an issue.

If you encounter a bug, an issue should be opened describing steps to reproduce the issue, as well as platform and other important information to the dev that would be fixing the issue. 
If there is interest in creating an issue template for bugs, then one can be made.

Issue tags should be used to separate bugs and features, as well as serve as imporant markers to developers looking for work to complete. 
