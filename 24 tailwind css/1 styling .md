# nav bar 

# app.component.html 


<nav class="flex justify-between p-4 bg-purple-900 text-white">
    <div>
        <a routerLink="/">Book Shop</a>
    </div>
    <div>
        <a routerLink="/cart">My Cart</a>
    </div>
</nav>

<div class="p-4">
<router-outlet></router-outlet>
</div>








