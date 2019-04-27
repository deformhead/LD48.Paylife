function countdown(entity) {

    const positionComponent = entity.get('position');
    const timerComponent = entity.get('timer');

    this.context.font = '24px Courier New';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = '#99e550';
    this.context.fillText(Math.floor((timerComponent.duration - timerComponent.elapsed) / 1000), positionComponent.x + 32, positionComponent.y + 32);
}

export {countdown};
