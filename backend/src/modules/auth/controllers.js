'use strict';

import dotenv from "dotenv";
dotenv.config();

import db from '../../db/connection.js';
import Boom from "@hapi/boom";
import uuid from "uuid";
import shajs from "sha.js";

const salt = process.env.SALT;

const authControllers = {
    
    async addModerator (req) {
        try {
            const { payload } = req;
            const match = await db.moderator.findOne({ login: payload.login });
            const newToken = uuid();
            const admin = await db.moderator.findOne({login: 'siromolot'});
            
            // if (admin) {
                if (match === null) {
                    await db.moderator.create({
                        name: payload.name,
                        department: payload.department,
                        login: payload.login,
                        password: shajs('sha256').update((payload.password + salt)).digest('hex'),
                        token: newToken,
                    });
        
                    return {
                        name: payload.name,
                        department: payload.department,
                        token: newToken,
                    }
                } else {
                    return Boom.badRequest('Данный пользователь уже существует')
                }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },

    async login (req) {
        try {
            const { payload } = req;
            const match = await db.moderator.findOne({ login: payload.login });
            const passwordHash = shajs('sha256').update((payload.password + salt)).digest('hex');
            const newToken = uuid();

            if (match !== null && match.password === passwordHash) {
                await match.updateOne({
                    token: newToken,
                });

                return {
                    name: match.name,
                    token: newToken,
                    department: match.department,
                }
            } else {
                return Boom.unauthorized('Неверный логин или пароль')
            }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },

    async logout (req) {
        try {
            const { credentials } = req.auth;
            const match = await db.moderator.findOne({ token: credentials.token });

            if (match !== null) {
                await match.updateOne({
                    token: null,
                });
                return 'Выход осуществлен успешно';
            } else {
                return Boom.badRequest('Ошибка поиска Пользователя');
            }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },
};

export default authControllers;