# OpieToo

A minimax look-ahead AI for [BattleSnake 2019](https://www.battlesnake.io/) written in TypeScript.

## Requirements

* Node 9.4.0+

## Setup

* `npm install`

## Usage

* `npm run dev`

Once running, the server will be accepting socket connections on port `5001`. This is the port that the snake can be reached at by the game server.

Configuration for the snake may all be found in the [config/](https://github.com/GriffinLedingham/bs19/tree/master/src/config) directory, and adjusted as desired. The snake hooks into my [BattleSnake recursion debugger](https://github.com/GriffinLedingham/battle-snake-debugger) for stepping through the decision trees of the snake.

## Tests

* `npm run test`

OpieToo also comes with a test suite of specific scenarios that it has lost to in the past. These tests were utilized to overcomes the weaknesses found in the AI, and the tests remain to make sure that future iterations don't go back on those changes. If seen fit, tests could be removed in future if the expected result is no longer the intended behaviour for the bot.
