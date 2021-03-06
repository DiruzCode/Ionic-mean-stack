// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports = mongoose.model('Bear', BearSchema);
