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
