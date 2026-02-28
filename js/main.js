// Canvas and context
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

// Game constants
const TILE_SIZE = 20;
const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 20;

canvas.width = TILE_SIZE * BOARD_WIDTH;
canvas.height = TILE_SIZE * BOARD_HEIGHT;

// Game variables
let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
];
let food = {};
let score = 0;
let direction = 'right';

function generateFood() {
    food = {
        x: Math.floor(Math.random() * BOARD_WIDTH),
        y: Math.floor(Math.random() * BOARD_HEIGHT)
    };
}

// Initial food generation
generateFood();

// Game loop
let gameInterval;

function update() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head);

    // Food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }

    // Wall collision
    if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
        gameOver();
    }

    // Self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
        }
    }
}

function drawBoard() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * TILE_SIZE, food.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function draw() {
    drawBoard();
    drawSnake();
    drawFood();
}

function main() {
    update();
    draw();
}

gameInterval = setInterval(main, 100);

document.addEventListener('keydown', e => {
    const key = e.key;
    const goingUp = direction === 'up';
    const goingDown = direction === 'down';
    const goingLeft = direction === 'left';
    const goingRight = direction === 'right';

    if (key === 'ArrowUp' && !goingDown) {
        direction = 'up';
    } else if (key === 'ArrowDown' && !goingUp) {
        direction = 'down';
    } else if (key === 'ArrowLeft' && !goingRight) {
        direction = 'left';
    } else if (key === 'ArrowRight' && !goingLeft) {
        direction = 'right';
    }
});

function gameOver() {
    clearInterval(gameInterval);
    alert('Game Over! Your score: ' + score);
    // For simplicity, we'll just reload the page to restart
    document.location.reload();
}