# Responsive Portfolio


## Installation

Deployment: 

https://jenryhennifer.github.io/responsive_portfolio/

Repository: 

https://github.com/jenryhennifer/responsive_portfolio

<hr />

## Technologies
* Html
* Bootstrap 
* GitLab 
* Github

<hr />

## Sample Images

![Contact](images/contact.png)
![Portfolio](images/portfolio.png)
![AboutMe](images/aboutme.png)

<hr />

##  Description

This webpage is my first attempt at my portfolio using [Bootstrap](https://getbootstrap.com/). Instead of using media queries, I used styling from Bootstrap to allow the page to be reactive. This is my first attempt at using bootstrap to make a successful, responsive, webpage. The navigation bar at the top is interactive and will guide you to one of 3 pages:

       1.Contact Me
       2.Portfolio
       3.About Me

I started by hand drawing out what my pages would look like to fully understand each element, columns, and rows.I searched Bootstrap for the elements I needed. 

The first element I attempted was the Navigation Bar and making sure it is the same on every page, while ensuring the elements to be clickable to allow the user to be able to navigate across all 3 pages using `<href>`. 

The next element I attmepted was the Contact Me page. I used `<form>` samples from Bootstrap. I used a card template from bootstrap to group the form in an even container. This space includes an input for a name, email, and message, including a submit button. Unfortunatly, as of now (09/16/2020), the submit button is not functioning.

The third element I attempted was the About Me page. This was a simple container with one row containting `<h1>` for the title, a second row containging 2 `<col-md-6>` to allow even spacing between the image and the text within the container, and finally a 3rd row containing 2 ~clickable~ buttons that will take you to either my linkedIn or GitHub pages. See Code Below:
```
<div class="btn-group" role="group" aria-label="Basic example">
    <a type="application/xml" class="btn btn-info" target='_blank' href= "https://www.linkedin.com/in/jennifer-henry-4a540a149/">LinkedIn</a>
    <a type="application/xml" class="btn btn-info" target="_blank" href="https://github.com/jenryhennifer">GitHub</a>
</div>
```

The fourth element I attempted was the Portfolio. The formatting of the container was a little complicated since I wanted to make two columns originally. I settled on no columns and placing all the images in one row and making them reactive to the screensize using `mx-auto` to set the margins left and right to auto.

The final element I attempted was the Footer. This was the most challenging part to my project. I was creating a sticky footer to stay to the bottom of the page even when scrolling. See code:
```
<footer class = 'page-footer font-small fixed-bottom text-info' style = "background-color:gray;">
  <div class = 'stickyfooter text-center' style= 'border-top: 10px solid'>
        <p class='footer-block'>© Copyright 2020 Jennifer Henry</p>
  </div>
</footer>
```
I made sure to fix it to the bottom of the screen, It often covered the content on each page, especially the portfolio page. I overcame my frustrations by using margins around my containers. See GIF below:


![Video](https://media.giphy.com/media/tfKiiPBPd26rqvIoeH/giphy.gif)

<hr />

## Future Plans
I plan to make this more personalized as well as adding my future projects into 'portfolio'. I plan to allow the contact me form to be fully functioning. Since this is my first attempt, the colors will change in the future as well as abilities of the webpage by incrementing features I learn in the future.

I hope to use this one day for future employers to see my abilities, as well as, sample my future projects.

<hr />

## License

MIT License

Copyright (c) 2020 Jennifer Henry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<hr />
<hr />

# Author

Jennifer Henry

* [LinkedIn](https://www.linkedin.com/in/jennifer-henry-4a540a149/)
* [GitHub](https://github.com/jenryhennifer)
* jenhenry1995@gmail.com


