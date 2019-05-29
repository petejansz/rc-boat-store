'use strict'

const Item = require( './item' )
const util = require( 'util' )

module.exports = class Propellor extends Item
{
    constructor( name, price, bladeCount, diameterMm, pitch, pn )
    {
        super(name, price)
        this.bladeCount = bladeCount
        this.diameterMm = diameterMm
        this.pitch = pitch
        this.pn = pn != null ? pn : util.format( "%s-%s-%s", bladeCount, diameterMm, pitch )
    }
}