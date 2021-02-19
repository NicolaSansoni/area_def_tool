import { order } from './data';
import { dot, vecSum } from './shapes';
import { AreaDictionary, IIndexable, Vector, Shape } from './types';

export class Area {
    private static counter = 0;

    readonly id: number;
    public shape: Shape;
    public isCarWalkable = true;
    public direction: Vector | null = null;
    public isParking = false;
    public stop: string | null = null;
    public isSelected = false;

    constructor(quad?: Shape, direction?: Vector) {
        this.id = Area.newId();
        this.shape = quad ?? [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
        if (direction) this.direction = direction;
    }

    static newId() {
        return Area.counter++;
    }

    toAreaDictionary(): AreaDictionary {
        const points = order(this.shape);
        const dir = this.direction ?? [0, 0];
        return {
            id: this.id,
            points: {
                lu: points[0].map(x => Math.round(x)) as Vector,
                ru: points[1].map(x => Math.round(x)) as Vector,
                rb: points[2].map(x => Math.round(x)) as Vector,
                lb: points[3].map(x => Math.round(x)) as Vector,
            },
            carWalk: this.isCarWalkable,
            dir: {
                left: dot(dir, [-1, 0]) > .25 ? true : false,
                up: dot(dir, [0, -1]) > .25 ? true : false,
                right: dot(dir, [1, 0]) > .25 ? true : false,
                down: dot(dir, [0, 1]) > .25 ? true : false,
            },
            parking: this.isParking,
            stop: `${this.stop ?? "None"}`,
            ref: this,
        };
    }

    fromAreaDictionary(ad: AreaDictionary) {
        this.shape = Object.values(ad.points);
        this.isCarWalkable = ad.carWalk;
        const dirs = {
            left: [-1, 0],
            right: [1, 0],
            up: [0, -1],
            down: [0, 1],
        };
        this.direction = Object.entries(ad.dir)
            .map(([k, v]) => v ? (dirs as IIndexable)[k] : [0, 0])
            .reduce((res, vec) => vecSum(res, vec));

        this.isParking = ad.parking;
        this.stop = ad.stop;
        ad.ref = this;
        return this;
    }
}