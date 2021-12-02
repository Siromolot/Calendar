"use strict";

import dotenv from "dotenv";
dotenv.config();

import * as Joi from "@hapi/joi";

import Hapi from "@hapi/hapi";
import routes from "./modules/index.js";
import Inert from "@hapi/inert";
import AuthBearer from "hapi-auth-bearer-token";
import makeUserAuth from "./auth/user.js";
import fs from "fs";

const init = async() => {
    // ToDo: добавить nodemon
    // ToDo: подумать, надо ли департаменты добавить на бэк или захардкодить на фронте

    const options = {
        port: 49000,
        host: "0.0.0.0",
        // TODO: заполнить, если будет ssl, отя скорее всего Лад сам ключи закинет
        // tls: process.env.NODE_ENV === 'production' ?
        // {
        //     key: fs.readFileSync(('/etc/ssl/calendar_private.key'), 'utf8'),
        //     cert: fs.readFileSync(('/etc/ssl/calendar.ru.crt'), 'utf8')
        // }
        // : {},
        routes: {
            cors: true,
            validate: {
                failAction: (request, h, err) => {
                    if (process.env.NODE_ENV === 'production') {
                        console.error('ValidationError:', err.message);
                        throw new Error('Invalid request payload input');
                    } else {
                        console.error(err);
                        throw err;
                    }
                }
            }
        }
    }

    const optionsDev = {
        port: 49000,
        host: "0.0.0.0",
        // для того, чтобы валидатор Joi писал нам конкретно, что именно не так в валидации (на стороне разработки):
        routes: {
            cors: true,
            validate: {
                failAction: (request, h, err) => {
                    if (process.env.NODE_ENV === 'production') {
                        console.error('ValidationError:', err.message); // Better to use an actual logger here.
                        throw new Error('Invalid request payload input');
                    } else {
                        console.error(err);
                        throw err;
                    }
                }
            }
        }
    }

    const server = Hapi.server(process.env.NODE_ENV === 'production' ? options : optionsDev);

    await server.register([Inert, AuthBearer]);

    makeUserAuth(server);

    // прописываем пути (не забываем перезапускать сервак после добавления или изменения каждого роута)
    server.route(routes);
    await server.start();
    console.log("Server running on", server.info.uri);
};

// некая "подписка" на глобальный объект process, в который передается reject, который никто не обработал
process.on("unhandledRejection", (err) => {
    console.log(err);
    // эта строка означает, что сервер "падает" и больше не может принимать запросы
    process.exit(1);
});

init();
