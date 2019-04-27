import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';
import {Click} from 'components/demo/click.js';

function start() {

    console.log('start score scene');

    this.world = new World(this);
    this.state.ready = false;

    setTimeout(() => {

        this.state.ready = true;

        this.world.add(new Entity('click', [

            new Position(

                0,
                0,
                0
            ),
            new Hitbox(320, 480),
            new Click((entity) => {

                this.load('demo');
            })
        ]));

    }, 2000)
}

export {start};
