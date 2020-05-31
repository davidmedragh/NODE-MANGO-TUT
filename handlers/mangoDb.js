function connection(err, client) {
    if (err) { console.error(err.message); return;}
    console.log('connected to MangoDb. ');
}

exports.connection = connection;