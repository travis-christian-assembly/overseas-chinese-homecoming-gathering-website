### Environment Setup
* Install [Homebrew](https://docs.brew.sh/Installation)
* Install Node.js
  * Run command: `brew install node`
  * Verify version of the installed `node` and `npm`
    * Run command: `node --version` (Version should be greater than or equal to `v12.4.0`.)
    * Run command: `npm --version` (Version should be greater than or equal to `6.9.0`.)
* Install Git
  * If you use a Mac, you can skip this. Apple ships their own fork of `git`.
* Install Gatsby CLI
  * Run command: `npm install -g gatsby-cli`

### Recommended Development Tools
* Terminal: [iTerm2](https://www.iterm2.com/)
* Shell: [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

### Local Development
#### To run the website locally on your machine
* `cd` into the root directory of the website project.
* Run command: `npm install`
* Run command: `npm run develop`

### Publish to Beta Stage
GitHub Pages is used for beta testing, any manual testing or automated testing should be done against this stage before promoting changes to the next stage.

* Run command: `npm run deploy`

### Publish to Prod Stage
Once testing (manual or automated) is done in Beta stage, do the following to deploy changes to the production website.

* Run command: `git push`
