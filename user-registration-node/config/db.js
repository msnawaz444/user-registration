var mongoose = require('mongoose');

//Creating mongodb connection
var url = 'http://localhost:27017/mydb';
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err)
        console.log("Error in db connection", err);
    console.log('Database Connection Established..!!');
});

//exporting modules
module.exports = {
    mongooseConnection: mongoose
};