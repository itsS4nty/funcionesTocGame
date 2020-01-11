function anulacionVenta(data){
    var net = require('net');
    client.connect(8890, '127.0.0.1', function(){
        console.log('Conectado al CoLinux | Anulacion venta');
        var anulacion_venta = `\x02${data.cliente};${data.tienda};${data.tpv};gleidy;${data.ticket};11;${data.importe};(NumOpCO);(NumOpBco);(CodAut)\x03`;
        client.write(anulacion_venta);
    });
    client.on('data', function(data){
        console.log('Recibido: ' + data);
        client.write('\x02ACK\x03');
        client.destroy();
    });
    client.on('close', function(){
        console.log('Conexión cerrada');
    });
  }