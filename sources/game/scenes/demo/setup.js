import {Mouse} from 'modules/mouse.js';

function setup() {

    console.log('setup demo scene');

    this.state.inputs = [];
    this.state.mouse = new Mouse(this.element, this.state.inputs);
}

export {setup};
