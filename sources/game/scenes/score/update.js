import {click} from 'systems/demo/click.js';

function update() {

    // console.log('update score scene');

    this.world.system(['click', 'hitbox', 'position'], click);
    this.state.inputs.length = 0;
}

export {update};
