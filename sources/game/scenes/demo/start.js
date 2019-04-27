import {Entity, World} from 'modules/world.js';

import * as Ease from 'modules/ease.js';

import {Force} from 'components/common/force.js';
import {Hitbox} from 'components/common/hitbox.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';
import {Click} from 'components/demo/click.js';
import {Hit} from 'components/demo/hit.js';
import {Text} from 'components/demo/text.js';

function start() {

    console.log('start demo scene');

    this.world = new World(this);

    const cards = this.assets.datasets.demo.card();

    this.state.first = true;
    this.state.card = 0;
    this.state.life = 3;
    this.state.score = 0;
    this.state.best = this.state.best || 0;
    this.state.setBest = () => {

        this.state.best = this.state.score > this.state.best ? this.state.score : this.state.best;
    };
    this.state.decay = {

        'rate': 0,
        'elapsed': 0
    };
    this.state.drop = {

        'rate': 0,
        'elapsed': 0
    };
    this.state.createCard = (x, y) => {

        if (typeof cards[this.state.card] !== 'undefined') {

            const card = this.state.card;

            this.world.add(

                new Entity('card', [

                    new Images([

                        {
                            'source': this.assets.images.demo[cards[card].type](),
                            'frames': [

                                [0, 0, 80, 128]
                            ],
                            'destination': [0, 0, 0, 80, 128]
                        },
                        {
                            'source': this.assets.images.demo.heart(),
                            'frames': [

                                [0, 0, 32, 32]
                            ],
                            'destination': [48 + 8, 0 - 8, 1, 32, 32]
                        }
                    ]),
                    new Position(

                        x,
                        y,
                        3
                    ),
                    new Hitbox(80, 128),
                    new Click((entity) => {

                        this.world.add(new Entity('heart', [

                            new Position(

                                x + 48 + 8,
                                y - 8 - 16,
                                1
                            ),
                            new Force(0, -16, 300, Ease.easeOut(3), (heartentity) => {

                                this.world.remove(heartentity);
                            }),
                            new Images([

                                {
                                    'source': this.assets.images.demo.heart(),
                                    'frames': [

                                        [0, 0, 32, 32]
                                    ],
                                    'destination': [0, 0, 4, 32, 32]
                                }
                            ]),
                            new Text([

                                {
                                    'text': '-' + cards[card].life,
                                    'x': 16,
                                    'y': 16
                                }
                            ])
                        ]));

                        this.state.life -= cards[card].life;
                        this.state.drop.rate += cards[card].drop;
                        this.state.decay.rate += cards[card].decay;

                        this.state.createCard(

                            entity.get('position').x,
                            entity.get('position').y
                        );

                        this.world.remove(entity);
                    }),
                    new Text([

                        {
                            'text': '-' + cards[card].life,
                            'x': 64 + 8,
                            'y': 16 - 8
                        },
                        {
                            'text': '+' + cards[card].drop + '/s',
                            'x': 40,
                            'y': 116
                        }
                    ])
                ])
            );

            this.state.card += 1;
        }
    };
    this.state.createBlood = (x, y) => {

        // this.world.add(new Entity('blood', [
        //
        //     new Position(
        //
        //         x,
        //         0,
        //         1
        //     ),
        //     new Force(0, this.size.height, 1000, Ease.easeOut(3), (entity) => {
        //
        //         this.world.remove(entity);
        //     }),
        //     new Images([
        //
        //         {
        //             'source': this.assets.images.demo.hero(),
        //             'frames': [
        //
        //                 [0, 0, 64, 64]
        //             ],
        //             'destination': [8, 8, 0, 32, 32]
        //         }
        //     ])
        // ]));

        this.world.add(

            new Entity('hit', [

                new Position(

                    0,
                    0,
                    1
                ),
                new Images([

                    {
                        'source': this.assets.images.demo.hit(),
                        'frames': [

                            [0, 0, 320, 160],
                            [1, 0, 320, 160],
                            [2, 0, 320, 160],
                            [3, 0, 320, 160],
                        ],
                        'destination': [0, 0, 0, 320, 160]
                    }
                ]),
                new Hit(300)
            ])
        );
    };

    this.world.add(

        new Entity('hero', [

            new Images([

                {
                    'source': this.assets.images.demo.hero(),
                    'frames': [

                        [0, 0, 64, 64]
                    ],
                    'destination': [0, 0, 0, 64, 64]
                }
            ]),
            new Position(

                16,
                16,
                4
            )
        ])
    );

    // this.world.add(
    //
    //     new Entity('city', [
    //
    //         new Images([
    //
    //             {
    //                 'source': this.assets.images.demo.city(),
    //                 'frames': [
    //
    //                     [0, 0, 320, 320]
    //                 ],
    //                 'destination': [0, 0, 0, 320, 320]
    //             }
    //         ]),
    //         new Position(
    //
    //             0,
    //             0,
    //             -1
    //         )
    //     ])
    // );

    this.world.add(

        new Entity('box', [

            new Images([

                {
                    'source': this.assets.images.demo.box(),
                    'frames': [

                        [0, 0, 320, 320],
                        [0, 0, 320, 320],
                        [1, 0, 320, 320],
                        [0, 0, 320, 320]
                    ],
                    'destination': [0, 0, 0, 320, 320]
                }
            ]),
            new Position(

                0,
                0,
                -1
            )
        ])
    );

    this.world.add(

        new Entity('box-front', [

            new Images([

                {
                    'source': this.assets.images.demo.boxfront(),
                    'frames': [

                        [0, 0, 320, 320],
                        [0, 0, 320, 320],
                        [0, 0, 320, 320],
                        [1, 0, 320, 320]
                    ],
                    'destination': [0, 0, 0, 320, 320]
                }
            ]),
            new Position(

                0,
                0,
                2
            )
        ])
    );

    this.world.add(

        new Entity('timeline', [

            new Images([

                {
                    'source': this.assets.images.demo.timeline(),
                    'frames': [

                        [0, 0, 320, 160]
                    ],
                    'destination': [0, 0, 0, 320, 160]
                },
                {
                    'source': this.assets.images.demo.timelineback(),
                    'frames': [

                        [0, 0, 320, 160]
                    ],
                    'destination': [0, 0, -1, 320, 160]
                }
            ]),
            new Position(

                0,
                320,
                4
            )
        ])
    );

    this.world.add(

        new Entity('timer', [

            new Position(

                320 - 16 - 64,
                16,
                3
            ),
            new Images([

                {
                    'source': this.assets.images.demo.chronometer(),
                    'frames': [

                        [0, 0, 64, 64]
                    ],
                    'destination': [0, -2, 0, 64, 64]
                }
            ])
        ])
    );

    this.state.createCard(16 + 8, 336);
    this.state.createCard(16 + 8 + 80 + 16, 336);
    this.state.createCard(16 + 8 + 80 + 16 + 80 + 16, 336);
}

export {start};
