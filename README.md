## How to use:
  1. Make sure to have node and npm installed in your machine
  2. Clone and extract this repository into your machine
  3. Open terminal inside extracted directory
  4. Run Command: `npm i`
  5. Run Command: `npm run server` (use the command `sudo npm run server` if you are using linux)
  6. Open your REST client such as postman or insomnia to test the api endpoints (examples given below)
  
## Create Contact => POST to localhost:5000/api/contacts

![image](https://user-images.githubusercontent.com/25118296/91294159-eb8c5f80-e7ba-11ea-9512-219fb73efe51.png)
<br/>
<br/>
## List Contacts => GET to localhost:5000/api/contacts

![image](https://user-images.githubusercontent.com/25118296/91294326-2a221a00-e7bb-11ea-9a0b-b4a1cf141906.png)
<br/>
<br/>
## Read Contact by Phone Number => POST to localhost:5000/api/contacts/search/:number

![image](https://user-images.githubusercontent.com/25118296/91294506-75d4c380-e7bb-11ea-9429-9453e782ab96.png)
<br/>
<br/>
## Delete Contact by ID => DELETE to localhost:5000/api/contacts/:id

![image](https://user-images.githubusercontent.com/25118296/91294910-0ad7bc80-e7bc-11ea-8fac-4269aea7410c.png)
<br/>
<br/>
## Update Contact by ID => PUT to localhost:5000/api/contacts/:id

![image](https://user-images.githubusercontent.com/25118296/91294993-2f339900-e7bc-11ea-90d9-55e61c11480a.png)

