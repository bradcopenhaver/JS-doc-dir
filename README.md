# Doctor Finder

#### This web app returns a list of doctors from the BetterDoctor API when given a search term. {January 2017}

#### By **Brad Copenhaver**

## Description
This program uses the BetterDoctor.com API to retrieve a list of doctors and information about those doctors. Users can search by keyword or by ailment from a list of ailments supplied by BetterDoctor. Search location and search radius can be chosen from drop-down lists.

## Setup/Installation Requirements
_Instructions assume that the user has installed Node and Bower package managers. See https://nodejs.org/en/ or https://bower.io/ for more info._
1. Clone this GitHub repository.
2. Navigate to the repository in the command prompt and run `>npm install`.
3. Run `>bower install jquery` then `>bower install bootstrap`.
4. Request an API key from https://developer.betterdoctor.com/.
5. In the repository directory, create a file `.env` containing the following code with your API key inserted: `exports.apiKey = "YOUR-API-KEY";`.
6. From the command prompt, run `>gulp build` then `>gulp serve`.
7. In a web browser, navigate to `localhost:3000`.

## Known Bugs

None yet, mostly due to lack of testing.

## Possible future version features

Make search results link to detailed information on that doctor.
Add pagination.

## Support and contact details

If you have questions or comments, contact the author at bradcopenhaver@gmail.com

## Technologies Used

* Javascript
* jQuery
* Node.js
* Bower
* html/css
* Bootstrap

### License

This project is licensed under the MIT license.

Copyright (c) 2017 **Brad Copenhaver**
