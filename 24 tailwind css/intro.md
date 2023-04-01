# 2:51:00 .... 

# https://tailwindcss.com/docs/guides/angular


npm install -D tailwindcss postcss autoprefixer



# we will create a tailwind config file in our root .... 

npx tailwindcss init


# Then in the content , we specify all the files where tailwind should be applied ... 

# tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


# Add the following in the base style.css 

# styles.css

@tailwind base;
@tailwind components;
@tailwind utilities;


# example .... app.component.html
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>







# finished  .... you can start using it .... 

npm run start 

