# ...   3:10:00     

# We need to create the template variable in the form  input
# we will use the 
-ngModel

<input #email="ngModel"  required/>

# we can reference that input element with the template variable name .... #email ... 

<input
 #email="ngModel"
        required
        >
        <div 
        [hidden]="email.valid"
       >Email must be valid</div>
        </div>


# when we start typing in the input the div disappears ......
# the special things here 
    -[hidded]
    -ngModel
    -.valid
    -required


# ................................................................................................................................
# ................................................................................................................................
# ................................................................................................................................
# ................................................................................................................................
# ................................................................................................................................

# Now let's make that div to show when we click  on the email field and then click somewhere else without typing anything in this email field ...  ..... 
# we will use the *ngIf ... check if it's valid and do something ... 


<input
 #email="ngModel"
        required
        >
        <div 
        *ngIf="email.invalid && (email.dirty || email.touched) "
       >Email must be valid</div>
        </div>






