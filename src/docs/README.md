# package json
    - create a package json > npm init -y > ok

# tsconfig.json
    - create a TypeScript configuration file:
        npx tsc --init
        
# dependencies:
    - express > npm install express > ok
    - cors > npm install cors > ok
    - jest * >

    *LINKS TO DOC AND INDICATIONS:

    -https://medium.com/@vihangamallawaarachchi.dev/unit-testing-your-node-js-express-typescript-backend-c25761bbedc9 

    - supertest

# dev_dependencies
    - typescript > npm install typescript --save-dev > ok
    - typescript environment for node.js and express: 
        npm install typescript @types/node @types/express ts-node --save-dev > ok
    - eslint, typescript-eslint : this should 
    - nodemon > npm install --save-dev nodemon
    - jest
            npm install --save-dev jest ts-jest @types/jest

    - supertest
            npm install --save-dev supertest

# scripts
-   "test": "jest",
    "npm start": "nodemon server.ts"
# command line commands
    - nodemon server.ts
    - npm test

# documentation software
    - docusaurus
    - swagger

# steps
1) Start a server with Express and TypeScript:
    https://medium.com/@vihangamallawaarachchi.dev/setting-up-a-node-js-and-express-backend-with-typescript-a-comprehensive-guide-b15fad5c803c 
2) Study and implement the user auth AWT:
    https://www.codegrind.it/corsi
    
    ## Mongo DB
    > mongo DB commands:
                        - use db.databse_name = create "database_name" if not existing
                            ! after this command you won't find the db displayed in Compass CLI, cause it's still void.
                        - db.database_name.find() = finds all collections {} , or if more [{}, {}, {}, ...]
                        - db.database_name.find().pretty() = finds and displays in a prettify json way all collections
                        - db.database_name.insertOnee({"nome": "Andrea"}) = inserts just one record in the database
                        - db.utenti.insertMany([{"nome":"Edoardo", "cognome":"Rossi"}, {"nome":"Alberto","età":21}]) = 
                            inserts many records in the database
                         ! after this command you will find the db displayed in Compass CLI, cause it's been now populated
                         with collections 
                        
