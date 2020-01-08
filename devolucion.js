function devolucion(cliente, tienda, tpv, ticket, importe){
    var net = require('net');
    var client = new net.Socket();
    var current_datetime = new Date();
    var fecha = ('0' + current_datetime.getDate()).slice(-2) + "-" + ('0' + current_datetime.getMonth()+1).slice(-2) + "-" + (current_datetime.getYear()-100);
    client.connect(8890, '127.0.0.1', function(){
        console.log('Conectado al CoLinux | Devolucion');
        var devolucion = `\x02${cliente};${tienda};${tpv};gleidy;${ticket};2;${importe};banco;;;;;NumOpOrg;${fecha}\x03`;
        client.write(devolucion);
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