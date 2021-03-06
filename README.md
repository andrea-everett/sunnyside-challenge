# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/final-screenshot.jpg)
    (./screenshots/mobile-screenshots.jpg)

### Links
- Live Site URL: (https://andrea-everett.github.io/sunnyside-challenge/)

## My process

### Built with

- Flexbox
- CSS Grid
- Flex Wrap
- @media-queries

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This challenge gave me a clearer understanding of CSS Grid and Flex. I have a better understand of how to format Navbars, images, and text within specific areas of a webpage. I also learned many style tools to create hover effects over buttons.

To see how you can add code snippets, see below:

```html
<div class="client-section">
            <title>CLIENT TESTIMONIALS</title>
            <div class="client-card-row">
                <div class="client-card">
                    <div class="client-img"><img src="./images/image-emily.jpg"></div>
                    <p>We put our trust in Sunnyside and they delivered, 
                        making sure our needs were met and deadlines were always hit.
                    </p>
                    <h1>Emily R.</h1>
                    <h2>Marketing Director</h2>
                </div>
```

```css
.button1::before {
    background-color: rgb(250, 212, 0);
    position: relative;
    display: block;
    content: '';
    width: 115%;
    height: 0.5em;
    transform: translateY(1.3em) translateX(-7%);
    border-radius: 50vw;
    opacity: .2;
    z-index: -1;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I would like to dive deeper into CSS Grid and Flex and how it can be applied to more intricate webpages. I spent a lot of time working on the testimonial section to format the images, headers, and paragraphs correctly using CSS Grid. I would like to work on a more intricate project using these tools.

### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_css_navbar_image.asp) - This resource helped me format the navbar on the desktop version ontop of an image.
- [css-tricks](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) - This site explained how to add media queries for the mobile version.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - This resource was helpful in clarifying CSS Grid.

## Author

- Website - [Andrea Everett]
                live url: (https://andrea-everett.github.io/sunnyside-challenge/)
                github: (https://github.com/andrea-everett/sunnyside-challenge.git)
- Frontend Mentor - [@andrea-everett](https://www.frontendmentor.io/profile/andrea-everett)
- LinkedIn - [Andrea Everett]


## Acknowledgments

A big thanks to @Brandon-G-Tripp for looking over my code and me improve it and @cganzon who I used to reference code!

