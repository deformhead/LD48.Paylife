function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    this.state.mouse.destroy();
    delete this.mouse;
    delete this.world;
}

export {destroy};
