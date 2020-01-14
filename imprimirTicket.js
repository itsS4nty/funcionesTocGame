const escpos = require('escpos');
var path=require('path');

var device = new escpos.USB('0x4B8', '0x202'); //ESTE ES EL BUENO
var options = { encoding: "GB18030" };
var printer = new escpos.Printer(device, options);
// const tux = path.join(__dirname, 'contactlessCO.png');  
const tux = path.join(__dirname, 'contactlessChip.png');  
escpos.Image.load(tux, (image) => {
    device.open(() => {
        printer.image(image).then(() => 
            printer
            .text('C Antoni Forrellat 116, 6')
            .text('Sabadell - 08207')
            .text('')
            .text('TPV     TICKET    FECHA      HORA')
            .text(' 1       56242   14/01/2020  17:18')
            .text('-----------------------------------------')
            .text('Quantitat      Article             Import')
            .text('-----------------------------------------')
            .text(' 1             Baguette             1,00', 'UTF-8')
            .text('-----------------------------------------')
            .align('LT')
            .text('OP.: VENTA')
            .text('Trj: datoTramaVenta')
            .text('Tit: datoTramaVenta')
            .text('AID: datoTramaVenta')
            .text('LBL: datoTramaVenta')
            .text('ARC: datoTramaVenta')
            .text('CUENTA: datoTramaVenta')
            .text('COMER.: datoTramaVenta\nTerminal: datoTramaVenta')
            .text('Num.OP: datoTramaVenta\nCod.Aut: datoTramaVenta ')
            .align('CT')
            .text('')
            .text('1,00 EUR')
            .text('')
            .text('Operacion con PIN, Firma no necesaria')
            .text('')
            .text('Recibo para el cliente')
            .text('')
            .text('IVA INCLUIDO')
            .text('GRACIAS POR SU VISITA')
            .text('')
            .cut()
            .close());
        });
    });