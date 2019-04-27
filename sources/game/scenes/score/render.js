function render() {

    // console.log('render score scene');

    this.context.fillStyle = '#181a1f';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.context.font = '16px Courier New';
    this.context.textAlign = 'start';
    this.context.textBaseline = 'top';
    this.context.fillStyle = '#6b717d';
    this.context.fillText('Score :', 8, 8);
    this.context.fillStyle = '#d7dae0';

    this.context.fillText('Best : ' + this.state.best, 8, 32);
    this.context.fillText('Yours : ' + this.state.score, 8, 32 + 24);

    if (this.state.ready === true) {

        this.context.fillText('Click anywhere to restart...', 8, 32 + 24 + 24);
    }
}

export {render};
