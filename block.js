export class Block {
    constructor(stageWidth, stageHeight, x, y, width, height, ball) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.x = x;
        this.y = y;
        this.maxX = this.x + width;
        this.maxY = this.y + height;
        this.ball = ball;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff3842';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.maxX, this.y);
        ctx.lineTo(this.maxX, this.maxY);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = '#190f3a';
        ctx.moveTo(this.x, this.maxY);
        ctx.lineTo(this.x + 30, this.maxY + 30);
        ctx.lineTo(this.maxX + 30, this.maxY + 30);
        ctx.lineTo(this.maxX, this.maxY);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = '#9d0919';
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX + 30, this.maxY + 30);
        ctx.lineTo(this.maxX + 30, this.maxY);
        ctx.lineTo(this.maxX, this.y);
        ctx.fill();
        ctx.closePath();
    }
}
