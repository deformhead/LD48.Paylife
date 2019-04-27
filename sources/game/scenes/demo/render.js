import {images} from 'systems/common/images.js';
import {countdown} from 'systems/demo/countdown.js';
import {text} from 'systems/demo/text.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#7b818d';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.world.system(['images', 'position'], images);
    // TODO : REMOVE
    this.camera.render();

    this.context.font = '24px Courier New';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = 'white';
    this.context.fillText(this.state.life, 160 - 96 - 32 + 16, 0 + 32 + 16);

    this.world.system(['position', 'timer'], countdown);
    this.world.system(['position', 'text'], text);
}

export {render};
