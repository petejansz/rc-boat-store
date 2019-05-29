'use strict'

const Item = require( './item' )
const util = require( 'util' )

module.exports = class Hull extends Item
{
    constructor( name, price, type, lengthIn, beamIn, fabric, pn )
    {
        super(name, price)
        this.type = type.match( /^cat$|^mono$/i ) ? type : 'mono'
        this.lengthIn = lengthIn
        this.beamIn = beamIn
        this.fabric = fabric == null ? 'fiberglass' : fabric
        this.pn = pn != null ? pn : util.format( "%s-%s-%s-%s", name.toLowerCase().replace( ' ', '-' ), type, lengthIn, fabric )
    }
}