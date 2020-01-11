$('#vender').on('click', function(){
    var socket = io('http://localhost');
    socket.emit('venta', {
        cliente: 252,
        tpv: 1,
        tienda: 1,
        trabajador: "santy",
        importe: precio,
        ticket: 121
    });
});
var precio = $('#precio').text().replace(",","");
console.log(precio);