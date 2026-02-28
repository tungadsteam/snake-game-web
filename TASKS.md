# Task List: Snake Game

This document outlines the tasks for the Coder. Please implement them in the order listed.

## Phase 1: Setup and Basic Rendering

### Task 1.1: HTML and CSS Setup
-   **File:** `index.html`, `css/style.css`
-   **Description:**
    -   Create the basic HTML structure in `index.html`. It should include a `<canvas>` element for the game board and an `<h1>` for the score display.
    -   Link the `style.css` and `main.js` files.
    -   In `style.css`, center the game content on the page and give the canvas a border so it's visible.

### Task 1.2: Initialize Canvas and Game Variables
-   **File:** `js/main.js`
-   **Description:**
    -   Get the canvas element and its 2D rendering context.
    -   Define the game board constants (e.g., `TILE_SIZE`, `BOARD_WIDTH`, `BOARD_HEIGHT`).
    -   Initialize the snake as an array of segments in the center of the board.
    -   Initialize the food at a random position.
    -   Initialize the score to 0.
    -   Set the initial direction of the snake (e.g., to the right).

## Phase 2: Game Logic

### Task 2.1: Implement the Game Loop
-   **File:** `js/main.js`
-   **Description:**
    -   Create a `main()` function that will serve as the game loop.
    -   Use `setInterval()` or a `setTimeout` within `requestAnimationFrame` to call the `update` and `draw` functions at a fixed rate (e.g., every 100ms) to control the snake's speed.
    -   Create placeholder `update()` and `draw()` functions.

### Task 2.2: Drawing Functions
-   **File:** `js/main.js`
-   **Description:**
    -   Create a function `drawBoard()` to clear and draw the background of the canvas.
    -   Create a function `drawSnake()` to iterate over the snake array and draw each segment on the canvas.
    -   Create a function `drawFood()` to draw the food on the canvas.
    -   Call these functions inside the main `draw()` function.

### Task 2.3: Snake Movement Logic
-   **File:** `js/main.js`
-   **Description:**
    -   Implement the logic inside the `update()` function to move the snake.
    -   Create a new head based on the current direction.
    -   Add the new head to the beginning of the snake array.
    -   Remove the last segment of the snake's tail (unless it has just eaten food).

### Task 2.4: User Input
-   **File:** `js/main.js`
-   **Description:**
    -   Add a `keydown` event listener to the `document`.
    -   Create a function to handle the key presses for the Arrow Keys (Up, Down, Left, Right).
    -   This function should change the snake's direction variable.
    -   **Important:** Add logic to prevent the snake from reversing its direction (e.g., if moving right, it cannot immediately move left).

## Phase 3: Gameplay Features

### Task 3.1: Collision Detection
-   **File:** `js/main.js`
-   **Description:**
    -   **Food Collision:** In the `update()` function, check if the snake's head coordinates match the food's coordinates.
    -   If they match:
        -   Increase the score.
        -   Generate new food at a random location.
        -   Do **not** remove the snake's tail segment for this update cycle.
    -   **Wall Collision:** Check if the snake's head has hit the boundaries of the canvas.
    -   **Self Collision:** Check if the snake's head has collided with any other segment of its body.

### Task 3.2: Game Over and Restart
-   **File:** `js/main.js`
-   **Description:**
    -   If a wall or self-collision occurs, end the game.
    -   Stop the game loop (`clearInterval()`).
    -   Display a "Game Over" message (e.g., using `alert()` or drawing text on the canvas).
    -   Add a mechanism to restart the game (e.g., listen for an "Enter" key press after the game is over) which resets all game variables to their initial state and restarts the game loop.
