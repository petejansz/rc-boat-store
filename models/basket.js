'use strict'

const util = require( 'util' )
const Item = require( './item' )

module.exports = class Basket
{
    constructor()
    {
        this.items = {}
    }

    count( item )
    {
        var count = 0

        if ( item.constructor.toString().match( /Item/ ) )
        {
            count = this.items[item]
        }

        return count != null ? count : 0
    }

    addItem( item, count )
    {
        this.items[item] = count != null ? count : 1
    }

    removeItem( item, count )
    {
        if ( item.constructor.toString().match( /Item/ ) )
        {
            var previousCount = this.items[item]
            var desiredCount = count == null && previousCount != null ? previousCount - previousCount : previousCount - count

            if ( previousCount != null )
            {

                this.items[item] = desiredCount
            }
        }
    }

    total( item )
    {
        var total = 0
        var count = 0

        if ( item.constructor.toString().match( /Item/ ) )
        {
            count = this.items[item]
        }

        total = count != null ? count * item.getPrice() : 0
        return total
    }

    total()
    {
        var total = 0

        for ( var item in this.items )
        {
            var obj = JSON.parse( item )
            total += obj.price
        }

        return total
    }

    toString()
    {
        return JSON.stringify( ( this ) )
    }
}