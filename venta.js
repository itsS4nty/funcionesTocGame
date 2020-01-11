function venta(data){
    var net = require('net');
    client.connect(8890, '127.0.0.1', function(){
        console.log('Conectado al CoLinux | Venta');
        var venta_t = `\x02${data.cliente};${data.tienda};${data.tpv};gleidy;${data.ticket};1;${data.importe};;;;;;;\x03`;
        client.write(venta_t);
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