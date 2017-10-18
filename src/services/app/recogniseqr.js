var express = require('express');
var Jimp = require("jimp");
var formidable = require('formidable');

var recogniseQR = express.Router();

recogniseQR.get('/', function(req, res, next) {
    var details = 'Save QR template and parameters';
    res.render('recogniseqr', { title: 'Recognise QR code', details });

    //upload file
    /*
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.write('File uploaded');
            res.end();
        });
    */

    //reading the image file

    /*
    Jimp.read("./build/public/qrimages/qr-001.png", function (err, lenna) {
        if (err) throw err;
        lenna.resize(256, 256)            // resize
            .quality(60)                 // set JPEG quality
            .greyscale()                 // set greyscale
            .write("lena-small-bw.jpg"); // save
    });


    //recognising the file
    /*
     var buffer = fs.readFileSync('./build/public/qrimages/qr-001.png');
     Jimp.read(buffer, function(err, image) {
     if (err) {
     console.error(err);
     // TODO handle error
     }
     var qr = new QrCode();
     qr.callback = function(err, value) {
     if (err) {
     console.error(err);
     // TODO handle error
     }
     console.log(value.result);
     console.log(value);
     };
     qr.decode(image.bitmap);
     });

     */

    //displaying the file

});

recogniseQR.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
});


module.exports = recogniseQR;
