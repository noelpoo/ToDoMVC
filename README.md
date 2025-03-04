# ToDoMVC

This project contains end-to-end tests written using Cypress with Cucumber preprocessor support. Follow the steps below to set up the project and run the tests.

## Prerequisites
- **Node.js:** v18.18.0  
  [Download Node.js](https://nodejs.org/) if you don't have it installed.
- **Yarn:** Package manager  
  Install Yarn following the instructions from the [Yarn website](https://classic.yarnpkg.com/en/docs/install).
## Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/noelpoo/ToDoMVC.git
   cd ToDoMVC
2. **Install the dependencies:**
   ```bash
   yarn install
## Run the tests
1. **Run test in interactive mode:**
   ```bash
   yarn cypress open
2. **Run test in headless mode:**
   ```bash
   yarn cypress run
# Project Structure

The project structure is organized as follows:

```
ToDoMVC/
  cypress/
    e2e/
      common/
      features/
        todo.feature <- Cucumber BDD feature file    
    fixtures/  <- Folder for mock data
    pages/  <- Page object models folder
      ToDo/ 
        ToDoInput.js         
    support/
      commands.js  <- Custom cypress commands
      e2e.js                                            
  cypress.config.js  <- Config file for initializing Cypress & plugins       
  .gitignore                      
  package.json                    
  README.md                 
```