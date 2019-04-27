function hit(entity) {

    const hitComponent = entity.get('hit');

    hitComponent.elapsed += this.delta.update;

    if (hitComponent.elapsed >= hitComponent.duration) {

        this.world.remove(entity);
        this.state.score -= 1;
    }
}

export {hit};
