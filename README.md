# StockPortfolio
# Simple Reactjs input form to post data to asp.net core webapi

Http POST requests from input form with React component and dotnet core web API controller

# This Repository comprises of the below two projects 

1,  React project with a input form

2, Asp.Net Core 3.1 Webapi project


This will give a idea of how to input some values in the react front end and post the data to asp.net core webapi

The concepts covered is  "state in react" and usage of  axios library to make http requests

Enabling the CORS (Cross-Origin Requests) to access the Asp.Net core webapi to recieve the post request from react front end 


# How to set this project in your local 

For React Project 

1, Clone the project

2, npm install to make sure that dependencies are in place

3, npm start  to launch the app

if you are creating  the react app from the scratch , remember to install axios using npm install axios

For Asp.Net Core Web Api Project 

1, Prject will be part of the clone in the previous step

2, start the application from the Visual Studio tool bar 

3, if the build is success , it will launch a browser instance with the below json displayed 
{"stockName":"Microsoft Corporation","stockCode":"MSFT","quantity":"2","unitPrice":"208.90"}


 If the above mentioned steps are all good, then you can put a break point in the webapi controller method SaveItem() and input details in the react form a submit 
the break point will be hit


# Common Errors

1, Access to XMLHttpRequest at 'http://localhost:64425/stock' from origin 'http://localhost:3000' has been blocked by CORS policy:
 Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 solution :
 make sure that the CORS is enabled in startup class in webapi
 

# enjoy coding 




