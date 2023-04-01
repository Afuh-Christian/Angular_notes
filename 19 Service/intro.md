# What is a service 
    Service is a broad category encompassing any value , function, or feature that an application needs .. 

    A service is typically a class with a narrow , well-defined purpose . 
    It should do something specific and do it well .


# Why we need a service ... 

Ideally a component's job is to enable the user experience and nothing more 
-the component needs to be clean 
    -it shouldn't do the task of fetching the data from an external api , or api
    -should not be responsible for 
        -calculation of buisness logic


-A component should present properties and methods for data binding and the application logic 



-A component can delegate certain tasks to services , such as fetching data from the server , validating user input , or logging directly to the console 


# A service can also depend on another service
    -Like a UserService which fetch data can depends on HTTPService

# How to use the service ...





