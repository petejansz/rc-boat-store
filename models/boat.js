'use strict'

const Item = require( './item' )

module.exports = class Boat extends Item
{
    constructor( name, price, hull, motors, escs, propellors, pn )
    {
        super( name, price )
        this.hull = hull
        this.motors = motors
        this.escs = escs
        this.propellors = propellors
        this.pn = pn
        this.pn = pn != null ? pn : util.format("%s-%s-%s", name.toLowerCase().replace(' ', '-'), hull.type )
    }
}
