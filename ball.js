export class Ball {
    constructor(radius, speed) {
        this.x = 300;
        this.y = 300;
        this.vx = speed;
        this.vy = speed;
        this.radius = radius;
    }

    draw(ctx, stageWidth, stageHeight, block) {
        this.bounceWindow(stageWidth, stageHeight);
        this.bounceBlock(block);

        this.x += this.vx;
        this.y += this.vy;

        ctx.beginPath();
        ctx.fillStyle = '#fdd700';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        if (this.x - this.radius < 0 || this.x + this.radius > stageWidth) {
            this.vx *= -1;
        } else if (
            this.y - this.radius <= 0 ||
            this.y + this.radius >= stageHeight
        ) {
            this.vy *= -1;
        }
    }
    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);

            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);

            const min = Math.min(min1, min2);

            if (min1 === min2) {
                this.vx *= -1;
                this.vy *= -1;
            } else if (min === min1) {
                this.vx *= -1;
            } else if (min === min2) {
                this.vy *= -1;
            }
        }
    }
}
