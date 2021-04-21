/**
 * Quinn Satow
 * Rocket Patrol Mods
 * 4/20/21
 * Time: 12 Hours
 * 
 * Points Breakdown: 
 * Implement a simultaneous two-player mode (30) - I added a second control scheme to the mouse
 * Create and implement a new weapon (w/ new behavior and graphics) (20) - Mouse player has harder to use weapon to balance their more precise control
 * Implement mouse control for player movement and mouse click to fire (20) - Added for second player
 * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20) - On each successful hit the timer goes up by 1.5 seconds
 * Display the time remaining (in seconds) on the screen (10) - Top left now displays time remaining
 */
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    mouse: {
        target: null,
        capture: true
    },
    physics: {
        default: 'arcade'
    }
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, mouse;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;