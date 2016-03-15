/**
 * Created by mainadmin on 29.02.16.
 */

var mongoose = require('mongoose');


import {userSchema} from './schema/user';
import {gameSchema} from './schema/game';

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/pro_statistic');

