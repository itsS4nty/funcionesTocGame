const escpos = require('escpos');
var path=require('path');

var device = new escpos.USB('0x4B8', '0x202'); //ESTE ES EL BUENO
var options = { encoding: "GB18030" };
var printer = new escpos.Printer(device, options);
// const tux = path.join(__dirname, 'contactlessCO.png');  
//const tux = path.join(__dirname, 'contactlessChip.png');  
/*escpos.Image.load(tux, (image) => {
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
    });*/
    function hola(){
        var p = [1,2,3,4,5];
        var s = "";
        for(var i in p){
            s += i;
        }
        return p.toString().replace(/,/g,"\n");
    }
    const tux = path.join(__dirname, 'recuento.png');  
    escpos.Image.load(tux, (image) => {
        device.open(() => {
            printer.image(image).then(() => 
                printer
                .text(hola())
                .cut()
                .close());
                // .align('CT')
                // .size(2,2)
                // .text('BOTIGA : t--91')
                // .size(1,1)
                // .text('Resum caixa')
                // .text('')
                // .align('LT')
                // .text('Resp.   : Santy Alvarez')
                // .text('Inici   : miercoles 15-01-2020 08:00:00')
                // .text('Fi      : miercoles 15-01-2020 18:00:00')
                // .text('')
                // .size(1,2)
                // .text('Calaix Fet      :      1246.9')
                // .text('Descuadre       :         9.2')
                // .text('Clients Atesos  :      538.00')
                // .text('Recaudat.       :      1256.1')
                // .text('Albarans        :           0')
                // .text('')
                // .size(1,1)
                // .text('Moviments de Caixa')
                // .align('CT')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('-1.3 -> 42153')
                // .text('')
                // .text('')
                // .text('')
                // .cut()
                // .close());
            });
        });