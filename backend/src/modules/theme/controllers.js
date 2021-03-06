'use strict';

import dotenv from "dotenv";
dotenv.config();

import db from '../../db/connection.js';
import Boom from "@hapi/boom";
import * as fs from "fs";
import uuid from "uuid";

const themeControllers = {
    
    async getOneTheme (req) {
        
        try {
            const date = new Date();
            if (req.query.day > date) {
                return 'Ну сказали же, что рано ) Ну куда ты торопишься )'
            }
            
            const match = await db.theme.findOne({
                department: req.query.department,
                date: Number(req.query.day)
            });
            
            if (match !== null) {
                return {
                    title: match.title,
                    date: match.date,
                    department: match.department,
                    description: match.description,
                    link: match.link
                }
            } else {
                return 'Ой, что-то на эту дату у нас ничего нет'
            }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },
    
    async getThemes (req) {
        
        try {
            const match = await db.theme.find({
                department: req.query.department,
            });
            
            if (match !== null) {
                return match
            } else {
                return []
            }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },

    async addTheme(req) {
        try {
            const {credentials} = req.auth;
            const {payload} = req;

            if (credentials) {

                const match = await db.theme.findOne({
                    link: payload.link,
                    department: payload.department
                });

                if (match === null) {

                    const response = await db.theme.create({
                        department: credentials.department,
                        title: payload.title,
                        description: payload.description,
                        link: payload.link,
                        date: Number(payload.date),
                        id: uuid(),
                    });
                    
                    return response
                } else {
                    return Boom.badRequest('Данная тема уже существует');
                }
            } else {
                return Boom.unauthorized('У вас нет прав на данное действие')
            }
        } catch (err) {
            return Boom.badRequest(err);
        }
    },

    async editTheme(req) {
        const {credentials} = req.auth;
        const {payload} = req;

        try {
            const match = await db.theme.findOne({
                id: payload.id,
            });
            
            if (credentials.department === match.department) {
                if (match !== null) {
                    await match.update({
                        department: match.department,
                        title: payload.title,
                        description: payload.description,
                        link: payload.link,
                        date: match.date,
                        id: match.id,
                    });

                    const response = await db.theme.findOne({id: match.id,})
                    return response;
                } else {
                    return Boom.badRequest('Тема не найдена')
                }
            } else {
                return Boom.unauthorized('У вас нет прав на данное действие');
            }
        } catch (err) {
            return Boom.badRequest(err)
        }
    },

    async removeTheme(req) {
        try {
            const {credentials} = req.auth;
            const {payload} = req;

            if (credentials) {

                await db.theme.deleteOne({ id: payload.id });

                return 'Тема успешно удалена'
            } else {
                return Boom.unauthorized('У вас нет прав на данное действие');
            }
        } catch (err) {
            return Boom.badRequest(err);
        }
    },
}

export default themeControllers;