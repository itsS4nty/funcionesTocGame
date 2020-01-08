function vender(cliente, tienda, tpv, ticket, importe){
    var net = require('net');
    var client = new net.Socket();
    client.connect(8890, '127.0.0.1', function(){
        console.log('Conectado al CoLinux | Venta');
        var venta = `\x02${cliente};${tienda};${tpv};gleidy;${ticket};1;${importe};banco;PagoAplazado;;;;;`;
        client.write(venta);
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