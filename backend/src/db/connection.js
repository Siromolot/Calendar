// импортируем схемы
import themeSchema from "./schemas/theme.js";
import moderatorSchema from "./schemas/moderator.js";

import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';

console.log("PROCESS: ", process.env.NODE_ENV);

const hostPort = process.env.NODE_ENV === "production" ?
    `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}` : "localhost:27017";

mongoose.connect(`mongodb://${hostPort}/calendar`, {useUnifiedTopology: true, useNewUrlParser: true});

// обработчики из документации
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connection to MongoDB is successful on port ${hostPort}`);
});

// оборачиваем схему в модель и у модели появятся свои методы
const theme = mongoose.model('theme', themeSchema);
const moderator = mongoose.model('moderator', moderatorSchema);

// экспортируем модель
export default {
    theme,
    moderator,
};
