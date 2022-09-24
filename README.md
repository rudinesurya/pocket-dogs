### Pocket-Dogs
Photo gallery app done using React that will present a gallery of 6 random dog images at any one time and allow the user to favorite dog images (up to 6). 
The user is also able to regenerate a new set of random dog images by either refreshing the page or clicking the button at the bottom.
The selection of favorited dog images will be persisted in localStorage.
Layout is given the ability to flex so that the presentation will still be good on mobile screen.

Best practices
- using Context for providing props, callback to components in the scope
- React Hooks for handling web app lifecycle. eg. Read from localStorage only when the app loads, and save the user favorites to localStorage before exit.
- scss stylesheet
