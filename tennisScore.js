/*
Your friend has invited you to watch a tennis match at a local sports club. Since tennis isn't your favorite sport, you get bored right at the start of the first game and start looking for something to keep yourself entertained. Noticing the scoreboard, you realize you don't even know how many points have been won since the game started, so you decided to calculate this number. Given the current score, your goal is to find the number of points won in the current game.

If you are not familiar with tennis rules, here's a short description of its scoring system. Score calling is unique in tennis: each point has a corresponding call that is different from its point value. The table of points won and corresponding calls is given below.

+----------------------+--------------------+
| Number of points won | Corresponding call |
+----------------------+--------------------+
|          0           |      "love"        |
+----------------------+--------------------+
|          1           |       "15"         |
+----------------------+--------------------+
|          2           |       "30"         |
+----------------------+--------------------+
|          3           |       "40"         |
+----------------------+--------------------+
There's an additional rule to remember: when players are tied by one or two points, the score is described as "15-all" and "30-all", respectively.

It's guaranteed that no more than 5 points have been won so far, and the game is not over yet. It is also guaranteed that at least one point has been won.
*/

const tennisGamePoints = (scoreStr) => {
  const [love, all] = ["love", "all"]
  console.log("scoreStr ---> ", scoreStr)
  
  
}

tennisGamePoints("15-40")