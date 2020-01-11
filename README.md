Observaciones de los codigos
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
venta.js
Habría que mirar de poder sacar el nombre de la persona que esta en caja para ponerlo en la transacción. No se si en el toc se pone el nombre de la dependienta.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
devolucion.js
Lo que esta en parentesis ((Banco) y (NumOpOrg)) son datos que nos tiene que dar el banco. Dependiendo del banco, el (NumOpOrg) no es obligatorio para las devoluciones.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
anulacionVenta.js | anulacionDevolucion.js
El (NumOpCO) es un codigo que tiene que proporcionar ClearOne. 
El (NumOpBco) sirve para identificar la transaccion que se quiere anular. Es un numero de operacion que utiliza el banco para la transacción.
El (CodAut) es un codigo de autorizacion que asigna el banco para asignar la autorizacion.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------