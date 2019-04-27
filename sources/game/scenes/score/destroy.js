function destroy() {

    console.log('destroy score scene');
    console.log('-------');

    this.state.mouse.destroy();
    delete this.mouse;
}

export {destroy};
