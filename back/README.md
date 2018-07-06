
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

