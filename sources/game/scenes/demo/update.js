import {Entity} from 'modules/world.js';

import * as Ease from 'modules/ease.js';

import {Force} from 'components/common/force.js';
import {Hitbox} from 'components/common/hitbox.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';
import {Click} from 'components/demo/click.js';
import {Timer} from 'components/demo/timer.js';

import {force} from 'systems/common/force.js';
import {click} from 'systems/demo/click.js';
import {hit} from 'systems/demo/hit.js';
import {timer} from 'systems/demo/timer.js';

function update() {

    // console.log('update demo scene');

    this.world.system(['click', 'hitbox', 'position'], click);

    if (this.state.life <= 0) {

        this.state.setBest();
        this.load('score');
        return;
    }

    this.world.system(['position', 'force'], force);

    // if (this.state.decay.rate > 0) {
    //
    //     this.state.decay.elapsed += this.delta.update;
    //
    //     while (this.state.decay.elapsed >= 1000 / this.state.decay.rate) {
    //
    //         this.state.decay.elapsed -= 1000 / this.state.decay.rate;
    //
    //         this.world.add(new Entity('enemy', [
    //
    //             new Position(
    //
    //                 -128,
    //                 Math.floor(Math.random() * 160),
    //                 0
    //             ),
    //             new Hitbox(32, 32),
    //             new Force(this.size.width + 128, 0 , 8000, Ease.easeInOut(3), (entity) => {
    //
    //                 this.state.life -= 1;
    //                 this.world.remove(entity);
    //             }),
    //             new Images([
    //
    //                 {
    //                     'source': this.assets.images.demo.cloud(),
    //                     'frames': [
    //
    //                         [0, 0, 128, 64],
    //                         [0, 0, 128, 64],
    //                         [0, 0, 128, 64],
    //                         [1, 0, 128, 64],
    //                         [0, 0, 128, 64],
    //                         [1, 0, 128, 64],
    //                         [0, 0, 128, 64],
    //                         [0, 0, 128, 64],
    //                         [0, 0, 128, 64]
    //                     ],
    //                     'frame': 0,
    //                     'framerate': 8,
    //                     'destination': [0, 0, 0, 128, 64]
    //                 }
    //             ])
    //         ]));
    //     }
    // }

    if (this.state.drop.rate > 0) {

        if (this.state.first === true) {

            this.state.drop.elapsed = 1000 / this.state.drop.rate;
            this.state.first = false;

            this.world.get('timer').add([new Timer(60000)]);
        }
        else {

            this.state.drop.elapsed += this.delta.update;
        }

        while (this.state.drop.elapsed >= 1000 / this.state.drop.rate) {

            this.state.drop.elapsed -= 1000 / this.state.drop.rate;

            this.world.add(new Entity('heart', [

                new Position(

                    Math.floor(Math.random() * (this.size.width - 64 - 32 - 32)) + 32,
                    320,
                    1
                ),
                new Hitbox(64, 64),
                new Force(0, -320, 3000, Ease.easeInOut(2), (entity) => {

                    this.state.life -= 1;
                    this.state.createBlood(entity.get('position').x, entity.get('position').y);
                    this.world.remove(entity);
                }),
                new Click((entity) => {

                    entity.add([new Force(-entity.get('position').x + 16, -entity.get('position').y + 16, 300, Ease.easeOut(4), (entity) => {

                        this.world.remove(entity);
                    })])

                    this.state.life += 1;
                    this.state.score += 2;
                }),
                new Images([

                    {
                        'source': this.assets.images.demo.hero(),
                        'frames': [

                            [0, 0, 64, 64]
                        ],
                        'destination': [0, 0, 0, 64, 64]
                    }
                ])
            ]));
        }
    }

    this.world.system(['timer'], timer);
    this.world.system(['hit'], hit);

    this.state.inputs.length = 0;
}

export {update};
