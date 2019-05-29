'use strict'

const Item = require( './item' )
const util = require( 'util' )

module.exports = class Motor extends Item
{
    constructor( name, price, lengthMm, diameterMm, kv, poleCount, pn )
    {
        super(name, price)
        this.lengthMm = lengthMm
        this.diameterMm = diameterMm
        this.kv = kv
        this.poleCount = poleCount
        this.pn = pn != null ? pn : util.format( "%s-%s-%s-%s", name.toLowerCase().replace( ' ', '-' ), lengthMm, diameterMm, kv )
    }
}