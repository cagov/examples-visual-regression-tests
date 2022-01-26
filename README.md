# Using this package

## Requirements

- npm
- git

## Before first use.

1. clone repo `gh repo clone cagov/examples-visual-regression-tests` or `git clone git@github.com:zcagov/examples-visual-regression-tests.git`
3. `npm install`

## Run tests

1. Run site locally
   a. Go to project repo root.
   b. `git pull` (optional)
   c. `npm run start` (or equivalent)
2. Go back to this project root in another terminal window. (`z examples-visual-regression-tests`)
3. Verify the url of live and local sites match value in SITE.js file.
4. Initiate backstop with `npm run backstop`


### Test each .njk template on the site.

- Cannabis: `npm run test:cannabis`

- Drought: `npm run test:drought`

- Design system: `npm run test:designSystem`

\* `z` is the command [z-sh(https://github.com/agkozak/zsh-z) . `cd` also works!
