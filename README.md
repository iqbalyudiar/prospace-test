# Prospace Company Management Form

This project is a project that serves to create a management form that can organize a list of companies and offices

## System Design

This project consists of 2 parts, the first part is the server and the second is the client

### 1. Server

The server side was made from Express.js and Mongodb. The server has several parts such as Server, Config, and App

#### A. Server.js
In server.js it require 2 dependency namely express and mongoose. Then express can set the configuration of the server by running it in `http://localhost:8080`

#### B. Config
In config we configure the database url for our project and use it later in server.js .

#### C. App

In the App part it also consist of several parts such as controllers, models, and routes.

* Models : consist of the database models json.

* Routes : consist of route and setup for the RestAPI url that later be used in client.

* Controllers : The controllers consists of the methods for how to retrieve data from the database and serve as RestAPI, which the methods is used by routes


### 2. Client
 The client side consists of several parts such as index.js, app, components, apis, actions, and reducers
 
 #### A. Index.js
 In index.js it consist of the initial setup for the project such as React, ReactDOM, redux,etc.
 * React
 	* React is used to run the react component.
 * ReactDOM
 	* ReactDom used to render the app so the app can running
 * Redux
 	* createStore
 		* It is used to store the data in the global
 	* applyMiddleWare
 		* It is used to apply the middleware such as reduxThunk
 * React Redux
 	* Provider
 		* Provider used to cover react app and make the redux work
 * Redux Thunk
 	* Redux Thunk is the middleware that can be used in actions, so in the actions can performs async await to fetch data from API

 #### B. App.js
 App.js consists of the root component such as routing, and import bootstrap css.
 
 #### C. Apis
 Apis consist of the base url of the api
 
 #### D. Reducers
 In reducers there is parts whuch is the index.js and formReducers.js
 ##### index.js
 * In index.js contains the default thing to combine all reducers in the project, in this case it only combine the formReducers with cimbineReducers
 ##### formReducer
 * In formReducer consists of several action type that taken from actions.
 * INITIAL_STATE
 	* INITIAL_STATE consists of 2  states which are companies and offices that later be used to store all the data globally 
 * ADD_COMPANY
 	* This reducers doing by if action type equals to ADD_COMPANY it return rest of the state, then concat the action payload, and store it in companies INITIAL_STATE
 * FETCH_COMPANIES
 	* This reducers doing by if action type equals to FETCH_COMPANIES it return rest of the state and store action payload in companies INITIAL_STATE
 * FETCH_COMPANY
 	* This reducers doing by if action type equals to FETCH_COMPANY it return rest of the state and store action payload in companies INITIAL_STATE
 * DELETE_COMPANY
 	* This reducers doing by if action type equals to DELETE_COMPANY it return rest of the state, then it filter the companies if state id not equal with action payload, and store action payload in companies INITIAL_STATE
 * ADD_OFFICE
 	* This reducers doing by if action type equals to ADD_OFFICE it return rest of the state, then concat the action payload, and store it in companies INITIAL_STATE
 * FETCH_OFFICES
 	* This reducers doing by if action type equals to FETCH_OFFICES it return rest of the state and store action payload in companies INITIAL_STATE
 * DELETE_OFFICE
 	* This reducers doing by if action type equals to DELETE_OFFICE it return rest of the state, then it filter the companies if state id not equal with action payload, and store action payload in companies INITIAL_STATE
 
 #### E. Actions
 In actions consists of 2 parts the first part is types which contains all of the action types to prevent false typing, and the second part is index.js which contains all of the actions.
 
 ##### index.js
 * In this index.js it contains some action CRUD methods
 * addCompany
 	*  It is used to add the company form by using post methods from axios and it the payload is all of the response
 * fetchCompanies
 	* It is used to fetch all the companies using get methods from axios and the payload is all of the response
 * fetchCompany
 	* It is used to fetch a specific company by passing id parameter and it is use get methods from axios, the payload is all of the response.
 * deleteCompany
 	*  It is used to delete a specific company by passing id parameter and it is use delete methods from axios, the payload is the id
 * addOffice
 	*  It i used to add the office form by using post methods from axios and it share the specific company id that has the office and it the payload is all of the response
 * fetchOffices
 	* It is used to fetch all the offices using get methods from axios, it share the specific company id that has the office and the payload is all of the response	
 * deleteOffice
 	*  It is used to delete a specific office by passing officeid parameter and company id and it is use delete methods from axios, the payload is the id
 
 #### F. Components
 In components it consist 5 parts which is the company, create, office, and pages components.
 
 ##### Company
 * Company.js
 	* It is components that show all of the companies
  	* It receive props deleteCompany from actions to delete and state companies to show the companies
  * CompanyDetail.js
  	* It is a component that show the Component Details after we click the specific component in Overview Page
  	* It has props from fetchCompany and the state of companies
  * CompanyList.js
  	* This component is used to grouping the company component
 
 ##### Create
 * CreateCompany.js
 	*  This component is used to create the company form
 	*  It receive props from addCompany
 * CreateOffice.js
 	* This component is used to create the office form
 	* It receive props from addOfice and have companies state to show it in the form so the user can choose the company

##### Office
* Office.js
	*  It is used show the all of the offices
	*  It has 2 props which is the fetchOffices, and deleteOffice, and it also receive offices state to show the offices
* OfficeList.js
	* This component is used to grouping the company component

##### Pages
* OfficePage.js
	*  This component is used to show the office page that consists of company detail and office list
* OverviewPage.js
	*  This component is used to show the create company form, create office form, and company list


## Setup Instructions
This app has 2 part so it must be run separatedly

### Run the server
1. Open the directory server in the terminal
> cd server
2. Install al the dependecies
> npm install or yarn install
3. Run the server
> npm serve or yarn serve

### Run the client
1. Open the directory client in the terminal
> cd client
2. Install al the dependecies
> npm install or yarn install
3. Run the server
> npm start or yarn start
 
  
 


 





