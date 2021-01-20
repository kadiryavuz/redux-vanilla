* * Redux-Vanilla Player
Demonstrating how to use opinionated (Toolkit) version of Redux in a sample vanilla JS project

- A basic Video.js provided video player html is injected via HtmlWebpackPlugin

- Player class simply detects video element on the page and operate over store subscriptions and props

- Overall Redux implementation with Redux Toolkit

* Usage
 - Run 'npm start' to start project locally on: http://localhost:9000/

 - Run 'npm run build' to get a bundled js exported to /dist folder

 * Demo cases

 - Start the project and check Redux Dev Tools on Chrome
 - Press play on the player
 - While player is playing the sample content press pause and see the sample prop called 'count' is being modified on the dev tools
 - 'count' prop will be incremented by the payload value which is 2 in our scenario and it will keep doing the same behavior each time pause is pressed
 - If the playing content's duration is between 8 and 15 seconds, store will be updated with added errors - not displayable ones
 - A displayable error will be pushed the errors if pause is pressed after 20th second of the content
 - Since there is a subscription for a displayable errors in the storei a sample overlay will be displayed over the video element