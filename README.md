# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andre Tsai**

Time spent: **17-19** hours spent in total

Link to project: https://glittery-grand-magnesium.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after **three** incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Have an alert pop up when user uses up one life and replays the pattern again
* [x] Include a change mode button that can change the game between easy and hard mode
* [x] Include a label stating what the current game mode is
* [x] Have the change mode button disappear when the game is playing
* [x] Include a hard mode where when the patterns are playing, only one button is showed at a time so player can't use visual spatial memory
* [x] When the pattern is playing, the countdown timer will be replaced by "Pattern playing..." 
* [x] When its time for the user to guess, the countdown timer starts
* [x] When the game is stopped, a prompt "Click start to begin" replaces the timer

## Video Walkthrough (GIF)

**Winning the game in hard mode**: This gif shows the features of the hard game mode as well as the decreasing (decay function) clueHoldTime and the winning scenario. It also shows how the navy blue text above the start/stop button changes between {"Click start to begin!", "Pattern playing...", Countdown Timer} accordingly.

00:00 - 00:25 :
![](https://i.imgur.com/qB4C9J5.gif)
00:25 - 00:50 :
![](https://i.imgur.com/zS882xr.gif)

**Randomized Patterns**: Whenever the player restarts, a new secret pattern is generated.

![](https://i.imgur.com/vIid8Ui.gif)

**Used up three lives**: The gif shows the alert message of how many lives the player has left. It also shows that the clue pattern is played again if the player fails but still have lives remaining.

![](https://i.imgur.com/9uVQtvP.gif)

**Pictures show up when buttons are clicked**: I purposefully put pictures of food with the corresponding color as the buttons.

![](https://i.imgur.com/3y04jXT.gif)

**Exceed guess time limit**: The player has 30 seconds to guess each turn. The gif shows the display of the timer and alert showing up when the time runs out. The alert tells the player that s/he lost.

![](https://i.imgur.com/cHnl26f.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    Websites:
    https://www.w3schools.com/jsref/met_win_cleartimeout.asp
    https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts#:~:text=To%20clear%20all%20timeouts%20they,)%20timeouts%20(Gist%20link).
    https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
    https://www.w3schools.com/css/css_boxmodel.asp
    https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors
    https://www.w3schools.com/cssref/css_websafe_fonts.asp
    https://www.w3schools.com/howto/howto_js_countdown.asp
    https://www.quora.com/How-do-I-make-an-image-appear-after-a-button-is-clicked-with-css
    https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    https://html-color.codes/brown
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    https://www.w3schools.com/jsref/jsref_push.asp
    
    People:
    Wesley Kiang, my high school friend => I discussed a few bugs in my program with him to get a different perspective, we also decided to create a hard game mode (while the idea of the hard game mode is the same, we implemented the mode individually)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    The most challenging problem that I encountered while creating the submission was the list of bugs that appeared after I implemented both the timer and the hard game mode. One of the hardest bug to solve is when the player clicks stop/start button consecutively really fast, the countdown timer keeps counting down even though the game was not running. After a couple hours in attempting to solve this bug, there were still no results. 
    I decided to take a break to reset my mindset. When I came back to work, I discussed the timer issue with Wesley. After a lengthy discussion, I realized that I was tunnel visioning on the fact that I did not clear a time interval somewhere. We found that the issue was with forgetting to clear a timeout (not interval). In my program, to make the timer start only after the pattern stops playing, I used setTimeout to match the start of the setInterval with the ending tone of the current progressed pattern. So even though we cleared interval when the game stops, the timeout still runs and sets a new interval that becomes the bug. The issue was solved by appending the timeout ID's to an array and clearTimeout all the IDs that are in the array when timeouts need to be reset.
    From this, I am reminded again of how important team discussions and brain breaks are. When solving bugs, the first step is to figure out what exactly is causing the bug. The more complicated the program is, the harder it is to pinpoint the cause. Discussing about the cause really helped me because I was convinced that the issue was with something else. Without opening my mind to to different perspectives, the debugging process would've taken much longer. Taking breaks in between coding sessions help reset my mental, especially when I am frustrated about a bug that I can't fix.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    While working on this submission, I realized that the javascript file becomes very populated as more and more features are added. Just like how python can import modules from other python files, I am curious to how this javascript can be split into different components and have a hierachy of classes where the children imports the parent class. 
    I am also wondering how the javascript can be combined with React JS. I often hear people talk about React, so I want know what the advantages are with integrating a website such as this submission into React. For the extensive websites such as Facebook and Instagram, is it possible to build them without React?
    I also hear a lot about React Native, about how it is the mobile version of React JS where both iOS and Android are supported. Is React Native relevant in web development, or is it just for mobile apps?
    In this submission, the overall features are not that extensive, so it is easy for one person to cover frontend and backend aspects. For the far more intricate websites, are frontend and backend worked on by different groups and later on integrated with each other? I am really interested in working on more extensive projects with teammates to experience the whole full-stack experience.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    I was planning on implementing a hint feature, where the player can opt for a hint when they forgot the patten. My idea was to give a player a maximum of three hints, similar to the three lives that they have. However, I needed to balance time between this and my school work, so I decided to be content with the additional hard game mode for now. So if I had more time, I would work on the hint feature.
    While debugging, a difficulty is that the javascript file is too long and hard to read. With more time on my hands, I will organize the javascript better and possibly split it up into separate components with hierachy as mentioned my question in q3.
    I will also use any extra time I have to answer my questions mentioned earlier. Employing this Light and Sound memory game to ReactJS and React Native would be pretty cool - this game is something I would play on my phone when I'm bored.
    If I have even more time, I will make the website more accessible. If the player doesn't have a mouse and their mouse pad broke, then they can use tab/space/enter to navigate and play the game.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://northwestern.zoom.us/rec/share/13uJqoLULn44W7JkTOZf8UHa0y7AXZyP7g8s7mUnR7zhAoGy3s2FWZHeamMhvd2A.CiCa6-1L1OlBU85N)


## License

    Copyright Andre Tsai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
