import authControllers from "./controllers.js";
import * as Joi from "@hapi/joi";

const authRoutes =  [
    // TODO: сделать нормальную систему регистрации с ролью суперадмина
    {
        method: "POST",
        path: "/moderator",
        handler: authControllers.addModerator,
    },
    {
        method: "POST",
        path: "/auth",
        handler: authControllers.login,
    },
    {
        method: "GET",
        path: "/logout",
        handler: authControllers.logout,
        options: {
            auth: {
                strategy: "user",
            }
        }
    },
];

export default authRoutes;