const bodyParser = require('body-parser');
const cors = require('cors');

const UserRoutes = require('./UserRoute');

module.exports = app =>{
    app.use(bodyParser.json());
    app.use(cors());
    app.use(UserRoutes);
}
