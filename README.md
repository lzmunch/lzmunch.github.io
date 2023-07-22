# Personal Website

## How to add new page for project
Create page
* Create `src/assets/pages/project-name.js` to render page
* Create `src/assets/pages/project-name` directory for page assets

Link to website
* Edit `src/assets/index.js` to export module and add entry for project linking and gallery box creation
* Edit `src/Project.js` to import module and add a switch case

Docs
* Update CHANGELOG

## Deployment Workflow
* `npm run start` to start local server
* Make changes to feature branch for local development, commit, push, etc.
* Update `date` field in `package.json` to show when webpage was last updated.
* Deploy to gh-pages branch with `npm run deploy` and check for bugs. If you need to roll back, switch to master branch and deploy to gh-pages from there.
* Switch to master and then pull in feature branch with `git pull origin feature`
* At the end, create a new tag + release. Copy the changelog info and include a link to a diff with the previous version, using this link format:
    > `https://github.com/lzmunch/lzmunch.github.io/compare/<old-tag>...<new-tag>`

## Other Notes
### TODO
* Use Changelog correctly (automated)
* Remove extra `ProjectModalImage` class
* Create href class that includes`target="_blank"` and `rel=noopener noreferrer"`
* ~~Update React and deal with outdated dependencies~~

### Dev Environment
* Windows 10
* Node v18.17.0

### Upgrading Depenencies
In the rare case this website lasts another 5 years and requires more extensive depenency upgrades, I've documented the steps I took here.
* Learn how Node and React work again (lol)
* Make backup of package-lock.json
* Delete node_modules/
* Install newest version of Node using nvm (preserve old install)
* Remove unused package dependencies from package.json
* Change all versions in package.json to `"latest"`
* Run `npm install --save`
* Update version in package.json based on generated pacakge-lock.json (not really necessary but I find it useful for future reference)
* Run `npm install --save` again to verify everything works
* Run `npm run start`
* Pray
* Run `npm audit fix` to address issues that do not require attention

Troubleshooting after upgrades
* Check which package dependencies have been deprecated completely/are unusable post-upgrade. Remove them if possible.
* If not possible, revert other versions until it works, checking resolves with `npm install`
