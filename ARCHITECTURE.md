# Architecture Design: Snake Game

## 1. Technology Stack

-   **HTML5 Canvas:** For rendering the 2D game graphics.
-   **Vanilla JavaScript (ES6):** For all game logic. No external frameworks are needed to keep the project lightweight and performant.
-   **CSS3:** For basic styling of the game page.

## 2. File Structure

The project will follow a simple and clean structure:

```
/snake-game-web
|-- index.html         # Main HTML file containing the canvas element
|-- /css
|   |-- style.css      # Styles for the game container and score display
|-- /js
|   |-- main.js        # Core game logic
|-- ARCHITECTURE.md    # This file
|-- TASKS.md           # Detailed tasks for the Coder
```

## 3. Core Game Components (in `js/main.js`)

### a. Game Loop
-   The core of the game will be a `gameLoop` function that runs continuously using `requestAnimationFrame()`.
-   This loop will be responsible for updating the game state and re-drawing the canvas.
-   The speed of the snake will be controlled by the frequency of updates within the loop (e.g., updating the snake's position every 100ms).

### b. Game Board
-   A `<canvas>` element defined in `index.html`.
-   The board will be a grid of a fixed size (e.g., 20x20 tiles).
-   All rendering (snake, food, score) will happen on this canvas context.

### c. Snake
-   The snake will be represented as an array of objects, where each object has `x` and `y` coordinates. Example: `[{x: 10, y: 10}, {x: 9, y: 10}]`.
-   The first element of the array is the head of the snake.
-   **Movement:** On each game tick, a new head is added in the current direction of movement, and the last segment of the tail is removed.
-   **Growth:** When the snake eats food, the tail segment is not removed for that tick, causing the snake to grow longer.
-   **Control:** The snake's direction will be controlled by the Arrow Keys (Up, Down, Left, Right). We will need an event listener to capture key presses.

### d. Food
-   The food will be an object with `x` and `y` coordinates.
-   It will be drawn as a single tile on the game board.
-   When the snake's head coordinates match the food's coordinates, the snake "eats" it.
-   A new piece of food must then be generated at a random position on the board, ensuring it does not spawn on top of the snake.

### e. Scoring
-   A variable will keep track of the player's score.
-   The score increases by a fixed amount every time the snake eats food.
-   The score will be displayed on the page, either on the canvas itself or in a separate HTML element.

## 4. Game State Management
-   **Game Over:** The game ends under two conditions:
    1.  The snake's head collides with the boundaries of the game board.
    2.  The snake's head collides with any part of its own body.
-   **Restart:** After a "Game Over" state, the game should display the final score and offer an option to restart, which will reset the snake, score, and food to their initial states.
