class Cannon extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 1;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        if (!this.isFiring &&
            !(this.x == mouse.x && this.y == mouse.y)) {
            if ((mouse.x <= game.config.width - borderUISize - this.width) &&
                (mouse.x >= borderUISize + this.width)) {
                this.x = mouse.x;
            }
            if (mouse.y <= game.config.height - borderUISize - borderPadding &&
                mouse.y >= game.config.height * 2 / 3) {
                this.y = mouse.y;
            }
        }
        // fire button
        if (mouse.leftButtonDown() && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
            this.x -= 2.5*Math.sin(this.y/(3.14*this.height));
        }
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
            this.x = mouse.x;
            this.y = mouse.y;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}