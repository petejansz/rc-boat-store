const Hull = require( './models/hull' )
const Motor = require( './models/motor' )
const Propellor = require( './models/propellor' )
const Esc = require( './models/esc' )
const Battery = require( './models/lipo-battery' )
const Boat = require( './models/boat' )
const Basket = require( './models/basket' )

var hulls =
{
    'impulse': new Hull( 'Proboat Impulse hull', 100, 'mono', 31, 9, 'fg' ),
    'dominatorcf': new Hull( 'Oxidean Marine', 450, 'mono', 33, 10, 'cf' ),
    'dominatorck': new Hull( 'Oxidean Marine', 450, 'mono', 33, 10, 'ck' ),
    'animalcatcf': new Hull( 'Oxidean Marine', 650, 'cat', 38, 11.5, 'cf' ),
    'animalcatck': new Hull( 'Oxidean Marine', 650, 'cat', 38, 11.5, 'ck' )
}

var motors =
{
    'leo1800': new Motor( "Leopard", 80, 40, 74, 1800, 4 ),
    'leo2000': new Motor( "Leopard", 80, 40, 74, 2000, 4 ),
    'leo2200': new Motor( "Leopard", 80, 40, 74, 2200, 4 ),
    'oxiDean': new Motor( 'Oxidean Marine', 150, 40, 82, 1650, 6 )
}

var props =
{
    'octx442': new Propellor( 'Octura', 15, 2, 42, 1.4, 'x442' ),
    'octx445': new Propellor( 'Octura', 15, 2, 45, 1.4, 'x445' ),
    'octx645': new Propellor( 'Octura', 15, 2, 45, 1.6, 'x645' ),
    'cnc52L': new Propellor( 'CNC R-rotation', 30, 2, 52, 1.4, 'cnc52L' ),
    'cnc52R': new Propellor( 'CNC L-rotation', 30, 2, 52, 1.4, 'cnc52R' )
}

var batteries =
{
    'hp3S75C5200': new Battery( 'Hobby Power', 60, 3, 75, 5200, 'hp-3S-75C-5200' ),
    'hp3S50C5800': new Battery( 'Hobby Power', 50, 3, 50, 5800, 'hp-3S-50C-5800' )
}

var escs =
{
    'seak120': new Esc('Sea King', 80, 120, 'seaking-esc-120'),
    'seak180': new Esc('Sea King', 120, 180, 'seaking-esc-180'),
    'swordfish200': new Esc('Swordfish', 250, 200, 'swordfish-esc-200')
}

// Shop for boat parts, accessories, ...
var basket = new Basket()
basket.addItem( hulls.animalcatck )
basket.addItem( motors.oxiDean, 2 )
basket.addItem( escs.seak120, 2)
basket.addItem( batteries.hp3S75C5200, 8 )
basket.addItem( props.cnc52L )
basket.addItem( props.cnc52R )
var arrDominator = new Boat('ARR Dominiator CK', 700, hulls.dominatorck, motors.oxiDean, escs.seak180, props.cnc52R )
var total = basket.total()
console.log( total )
