'use strict'

const Item = require( './item' )
const util = require( 'util' )

module.exports = class Esc extends Item
{
    constructor( name, price, amps, pn )
    {
        super(name, price)
        this.amps = amps
        this.pn = pn != null ? pn : util.format( "%s-%s", name.toLowerCase().replace( ' ', '-' ), amps )
    }
}