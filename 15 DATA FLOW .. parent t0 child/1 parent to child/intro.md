# Passing data as props  to child components ... 

# Parent ...sending props ..
<ul>
<ng-container *ngFor="let book of books">
    <!-- passing props  -->
<app-child [book] = "book"></app-child>
</ng-container>
</ul>

# Child ... recieving props ... 
import @Input() from '@angular/core'


