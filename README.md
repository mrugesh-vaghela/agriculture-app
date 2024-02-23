# [Syngenta Assignment](https://docs.google.com/document/d/1sPrzbH9EUQ5SCAnWWqfMvqAEYPu4LXpfcqmTAD9zvKg/edit)

### Steps to setup
- Clone the project
- `npm i`
-  Change database configuration from file `config/config.json` change only `username` and `password`
- `npm start`
  
- Above step will create the database in your local machine, I haven't included any `seeders` so you have to create the Data yourself using the postman collection shared below

### Run the test suite
- `npm test`

### [Postman collection](https://www.postman.com/mrugeshsyngenta/workspace/syngenta/collection/10404838-d19bc1d2-08e5-4fd3-a9a4-a4f0f40547d2?action=share&creator=10404838&active-environment=10404838-f1c73ffe-fa2a-471d-b169-165cf171f8f8)

### How to test Login Auth0(Note: It is not fully integrated with APIs, but good for demo purpose and verifying that Auth0 work around)
1. run `npm start`
2. Go to `http://localhost:3000` [It should show `Not logged in`]
3. Go to `http://localhost:3000/login` and login using your gmail
4. Then again go to `http://localhost:3000` and it will always show you the user information along with `sid`
5. To logout, go to `http://localhost:3000/logout` and it will log you out from the app
6. When you go to `http://localhost:3000` after loging out, you will always see `Not logged in`
