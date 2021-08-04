# Personal Website

## How to add new page for project
Create page
* Create `src/assets/pages/project-name.js` to render page
* Create `src/assets/pages/project-name` directory for page assets

Link to website
* Edit `src/assets/index.js` to export module and add entry for project linking and gallery box creation
* Edit `src/Project.js` to import module and add a switch case

## Workflow
* `npm run start` to start local server
* Make changes to feature branch for local development, commit, push, etc.
* Update `date` field in `package.json` to show when webpage was last updated.
* Deploy to gh-pages branch with `npm run deploy` and check for bugs. If you need to roll back, switch to master branch and deploy to gh-pages from there.
* Switch to master and then pull in feature branch with `git pull origin feature`

## Todos
* Remove extra `ProjectModalImage` class
* Create href class that includes`target="_blank"` and `rel=noopener noreferrer"` 