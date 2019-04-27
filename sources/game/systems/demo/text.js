function text(entity) {

    const textComponent = entity.get('text');
    const positionComponent = entity.get('position');

    textComponent.texts.forEach((text) => {

        this.context.font = '16px Courier New';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillStyle = 'white';
        this.context.fillText(text.text, positionComponent.x + text.x, positionComponent.y + text.y);
    });
}

export {text};
