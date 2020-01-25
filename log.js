const fs = require('fs');

try {
    var h = 1;
    console.log(f);
} catch(err) {
    escribirLog(err);
}

function escribirLog(error) {
    fs.appendFile('test.log', `${error}\n`, function (err) {
        if (err) throw err;   
        console.log('Log actualizado');
      });
}
