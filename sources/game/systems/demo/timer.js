function timer(entity) {

    const positionComponent = entity.get('position');
    const timerComponent = entity.get('timer');

    timerComponent.elapsed += this.delta.update;

    if (timerComponent.elapsed >= timerComponent.duration) {

        this.state.setBest();
        this.load('score');
        return;
    }
}

export {timer};
