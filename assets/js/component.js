class Component {
    constructor(name, width, heigth, xPos, yPos, speed) {
        this.name = name;
        this.width = width;
        this.heigth = heigth;
        this.xPos = xPos;
        this.yPos = yPos;
        this.speed = speed;
    }
    draw(gameBoard) {
        const div = document.createElement('div');
        div.setAttribute('class', this.name);
        div.style.gridRow = `${this.yPos} / span ${this.heigth}`;
        div.style.gridColumn = `${this.xPos} / span ${this.width}`;
        gameBoard.appendChild(div);
    }
}

class Player extends Component {
    constructor(name, width, heigth, xPos, yPos, speed, lives) {
        super(name, width, heigth, xPos, yPos, speed);
        this.lives = lives;
    }
    moveLeft() {
        if (this.xPos > 0) {
            this.xPos--;
        }  
    }
    moveRight() {
        if (this.xPos < 11) {
            this.xPos++;
        }
    }
    moveUp() {
        if (this.yPos > 1) {
            this.yPos--;
        }
    }
    moveDown() {
        if (this.yPos < 10) {
            this.yPos++;
        }
    }
    shootMovement() {
        const playerDiv = document.querySelector('.player');
        playerDiv.style.background = `url("/assets/images/retro_developer_shooting.png") no-repeat center center/cover`;
    }
}

class Enemy extends Component {
    constructor(name, width, heigth, xPos, yPos, speed, health, defense) {
        super(name, width, heigth, xPos, yPos, speed);
        this.health = health;
        this.defense = defense;
        this.isDead = false;
    }
    takeDamage(amount) {
        let damage = amount - this.defense;
        if (damage < 0) {
            damage = 0;
        }
        this.health -= damage;
    }
    checkIsDead() {
        if (this.health <= 0) {
            this.isDead = true;
        }
    }
}
