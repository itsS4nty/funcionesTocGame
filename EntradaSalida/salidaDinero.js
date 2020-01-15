function saldia(valor){
    if(valor > 0 && valor < 5001){
        db.movimientos.put({
            id: x,
            timestamp: new Date(),
            tipo: 0,
            valor: valor,
            idCaja: await getCurrentCaja()
        })
    } else {
        notificacion('Cantidad erronea', 'error');
    }
    
}