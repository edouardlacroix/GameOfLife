# Game Of Life

The game of life is a very simple game, with only two rules.
It starts on a grid, each square being a cell which could be ON or OFF (alive or dead). Each iteration the two rules applies :
    - If a cell is ON and surounded by 2 or 3 ON cells, it will be ON the next round, else it will be OFF.
    - If an OFF cell is surounded by 3 ON cells, it will be ON the next round.

## Trying to implement the game of life to learn high refresh limits and optimizations

### Test 1 : Centralized

Having the main board keep all informations, updates and being the dispatch.

### Test 2 : Decentralized

Having each cell talking to their neighbors. 

### Initial planning

    - Having a way to display the cells
    - Having a way for the cell to know if it is ON or OFF
    - Having a working round system
    - Having a way to select the state of cell at start
    - Having a way to change speed
    - Having 2 pages to show both way of handling the game