

# PROJECT 1: TIC TAC TOE

Check it out here: https://kaitwal.github.io/Project-1-Tic-Tac-Toe/


### Snapshots of the game
#### Normal Mode
![normal mode](https://github.com/kaitwal/Project-1-Tic-Tac-Toe/blob/master/Screen%20Shot%202019-10-18%20at%201.01.38%20pm.png?raw=true)
#### Extreme Mode!
![extreme mode](https://github.com/kaitwal/Project-1-Tic-Tac-Toe/blob/master/Screen%20Shot%202019-10-18%20at%201.01.48%20pm.png?raw=true)


### How it works

The game starts with player 1 making the first move with character "X". Player 2 then makes the next move with character "O" and players repeatedly take turns until one player wins with three of their characters in a row.

#### Extreme Mode

Extreme Mode turns the game up a notch, with randomisation of the character being played. Player 1 who is expecting to put an X in their chosen box may be surprised by a unexpected O, which gives away their move to player 2. The same may occur vice versa. 




### Design Process

Immediately, I knew I had to give each box on the board an Id so that each move a player made could be assigned to that box.
After this I began to think about how I could store each players move. An array seemed completely appropriate. But not only was that a necessary data point for each player but also their character of X or O was equally important and from there I created two objects for each player. 
Building user interaction functionality came first using a single player to test when each button was clicked. Storing that data was also a priority too. 
Checking for a winner came second, which initiated the creation of an array that stores arrays of each possible winning combination. Looping through the players 'plays' array and comparing it to the array of possible win combinations was the idea.
From there I created a second player which started as an if statement but once I began creating the extreme mode, this ended up becoming its own function as the player had to be determined before the extreme mode function could be called. 
Once the essential game functionality was craeted I created the extreme mode.
Now it was time to implement some style and additional features into the game. And this is where animation came in.



### Challenges

Creating the checkThewinner function was easily the most difficult challenge in creating this game. My method of using a two dimensional array to store the possible win combinations presented itself as a new challenge that I hadn't faced before. Having an if statement within a loop with another if statement within another loop was a challenge, but eventually overcome as I broke down the problem into small pieces rather than attempting to solve the whole problem in one go. 


### Cool Tech
Researching a theme, I stumbled across a start field background that looked really really cool. Apart from simply loving the visual effect, after playing around with the code from codepen, I found a way to speed it up and also change the colours or make the dots become emojis. A very fun idea but dots were the more stylistic choice for the game. Nonetheless, changing these elements of the background truly set the scene for what was ambitiously name "Extreme Mode". Tic Tac Toe can only become so extreme, however this 

### Lessons learned

The first major lesson learned was in the js functionality of the game. As mentioned in the above challenges, two dimensional arrays have their challenges the first time you deal with them, but overall I am very happy with the data structure I chose as I did not manipulate the data, which is ideal. 

Another major lesson learned was to keep the CSS and JS animations organised. It's incredible how quickly the animations and styling becomes spread out everywhere across the mutiple files. I need to find a strategy for managing the styling, ideally based around specificty so that nothing can accidentally override a desired style change.

Finally, the last major lesson learned was to keep not only my css styling organised across files, but to also keep my setting changes in one place with a single method. I am specifically talking about the Extreme Mode. This option changes the whole game! And whilst I managed to keep my game functionality neatly organised with the Extreme Mode option, the css and styling began to spread out everywhere, especially after adding the star field background feature. 

Overall I am happy with the game, and from this I will focus on how to manage my CSS elements in a simple way, as well as potentially add more features in the future. 

I hope you enjoyed the game!



















