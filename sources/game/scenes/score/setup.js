import {Mouse} from 'modules/mouse.js';

function setup() {

    console.log('setup score scene');

    this.state.inputs = [];
    this.state.mouse = new Mouse(this.element, this.state.inputs);
}

export {setup};
