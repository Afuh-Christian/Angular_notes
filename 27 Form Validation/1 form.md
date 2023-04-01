
# ........form submition... 

# We can also create a reference for the form too  .... 
# we will use this to disable the action of the submit button if the form is invalid .. 
so this will disable the ngSubmit event if the form is not valid ... 
# we will use the 
-ngForm .... 

# codde ...............................

<form 
    (ngSubmit)="submit()"
    #myform="ngForm"
>


<input 
[disabled]="myform.form.invalid"
type="submit">
</form>

# .......................................

# ... special characters ...
-ngForm
-form
-[disabled]
-invalid