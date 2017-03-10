var SerialPort = require('serialport');

module.exports = {

    cmdOn: "ka 0 1\n",
    cmdOff: "ka 0 0\n",

    on: function () {
        console.log("turn on TV");
        this.sendCommand(this.cmdOn);
    },

    off: function () {
        console.log("turn off TV");
        this.sendCommand(this.cmdOff);
    },

    sendCommand: function (cmd) {

        var port = new SerialPort("/dev/ttyAMA0", {baudrate: 9600}, function (err) {
            if (err) {
                return console.log('Error: ', err.message);
            }
            port.write(cmd, function (err, results) {
                if (err)
                    console.log('err ' + err);
                else
                    console.log('results ' + results);
                port.close();
            });
        });
    }

};