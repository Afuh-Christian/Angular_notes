# Dependency Injection ... 
DI is wired into the Angular framework and used everywhere to provide new components with the services or other things they need

Components consume services; that is , you can inject a service into a component , giving the component access to that service class .


# How does the contructor of the component know how to create the instance of the service

# Normally we do it like this .... 
parent. component  ..class ...


  private parentService: ParentService;
  constructor() {
    this.parentService = new ParentService()
   }


this is not dependency injection .... 
We cannot do this because we might end up with an instance of a services containing lot's of other dependencies...