# 2048 engine
![Tests](https://github.com/eikhr/2048-engine/actions/workflows/main.yml/badge.svg)

Handles logic for 2048 game. 

Originally based on [`2048-ts-engine`](https://github.com/karelnguyen/2048-ts-engine) by Karel Nguyen, but has now been completely rewritten to support additional features.

## Example

```typescript
import { createGame, Direction } from '2048-engine';

const game = createGame();
game.move(Direction.UP);
game.move(Direction.RIGHT);

console.log(game);
```
might print:
```js
{
    currentState: {
        board: [
            [ null, null, { value: 2, id: 0 }, { value: 4, id: 1 } ],
            [ null, null, null, { value: 4, id: 2 } ],
            [ null, null, { value: 4, id: 3 }, null ],
            [ null, null, null, null ]
        ],
        score: 0,
        rngNumber: 455431,
        totalTileCount: 4,
        status: { hasPossibleMoves: true, isWon: false }
    },
    boardMeta: { rows: 4, cols: 4 },
    randomSeed: 455423,
    moveLog: [ { type: 0, direction: 0 }, { type: 0, direction: 3 } ],
    move: [Function: move]
}
```

## API

### `createGame`
The package exposes one method `createGame` that creates a new game.

`createGame(gameData?) => Game`

Can be supplied with `GameData` to initialize the game with.

### `Game`
The created game object contains the following properties:

- `currentState`: The current state of the game. (see `GameState`)
- `move`: Function to make a move in the game. Takes a `Direction` as an argument and returns an updated `GameState` in addition to updating `game.currentState`
- `boardMeta`: Metadata about the board. Contains `rows` and `cols` properties, which are the number of rows and columns in the board.
- `randomSeed`: The random seed used to create the game. A new game created with the same random seed will be exactly the same given the same moves.
- `moveLog`: List of all moves made in the game. Each move is a `Move` object.

### `GameData`
GameData is a subset of `Game` containing all properties except `currentState` and `move`. A new game created with the same `GameData` as an existing game will be exactly the same.

### `GameState`
The gameState contained within `Game` contains the following properties:

- `board`: The board state. A 2D array of `Tile`-objects.
- `score`: The current score of the game.
- `status`: object containing booleans `isWon` and `hasPossibleMoves` describing current game status.

### `Tile`
Each tile object contains an id, and its current value. The tile might also contain a `mergedId` specifying the id of the tile it was most recently merged with.

- `id`: id to identify the tile, unique per game.
- `value`: The value of the tile.
- `mergedId`: The id of the tile it was most recently merged with. (useful for animations)

