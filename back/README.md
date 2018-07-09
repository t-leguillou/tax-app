
First install the environment
```
#install mongodb if not installed (following line for mac)
brew install mongodb
```
Set up your db
```
mkdir data
mkdir data/db
mongod --dbpath PATH_TO_THE_PROJECT/tax-app/back/data/db
```
Launch the project
```
npm i
npm start

# if you don't the default API_KEY, run
API_KEY="YOUR_API_KEY" node server.js
```

Launch the tests
```
npm t
```
