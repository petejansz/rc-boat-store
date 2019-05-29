'use strict'

module.exports = class Item
{
    constructor( name, price )
    {
        this.name = name
        this.price = price

        if ( this.constructor === Item )
        {
            throw new TypeError( 'Can not construct abstract class.' )
        }
    }

    getName() { return this.name }
    setName( value ) { this.name = value }
    getPrice() { return this.price }
    setPrice( price ) { this.price = price }
    getPartnumber() { return this.pn }

    toString()
    {
        return JSON.stringify( ( this.valueOf() ) )
    }
}
