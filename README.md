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
* Deploy to gh-pages branch with `npm run deploy`
* Switch to master and then pull in feature branch with `git pull origin feature`