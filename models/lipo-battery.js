'use strict'

const Item = require('./item')
const util = require('util')

module.exports = class Battery extends Item
{
    constructor( name, price, s, c, mAh, pn )
    {
        super(name, price)
        this.s = s
        this.c = c
        this.mAh = mAh
        this.pn = pn
        this.pn = pn != null ? pn : util.format("%s-%s-%s", name.toLowerCase().replace(' ', '-'), s, c, mAh )
    }
}