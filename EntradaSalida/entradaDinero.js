function entrada(valor){
    if(valor > 0 && valor < 5001){
        db.movimientos.put({
            id: x,
            timestamp: new Date(),
            tipo: 1,
            valor: valor,
            idCaja: await getCurrentCaja()
        })
    } else {
        notificacion('Cantidad erronea', 'error');
    }
    
}