/**
 * Created by mainadmin on 09.03.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let gameSchema = new Schema({
    name: String,
    description: String,
    teams: [Schema.Types.ObjectId]
});

export {gameSchema};