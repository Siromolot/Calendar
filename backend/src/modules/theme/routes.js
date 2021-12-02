import themeControllers from "./controllers.js";
import * as Joi from "@hapi/joi";

const themeRoutes =  [
    {
        method: "GET",
        path: "/themes",
        handler: themeControllers.getThemes,
        options: {
            validate: {
                query: Joi.object ({
                    department: Joi.string().required(),
                    date: Joi.string().required(),
                }).required(),
            },
        }
    },
    {
        method: "POST",
        path: "/themes",
        handler: themeControllers.addTheme,
        options: {
            auth: {
                strategy: "user",
            },
        },
    },
    {
        method: "PUT",
        path: "/themes",
        handler: themeControllers.editTheme,
        options: {
            auth: {
                strategy: "user",
            },
        }
    },
    {
        method: "DELETE",
        path: "/themes",
        handler: themeControllers.removeTheme,
        options: {
            auth: {
                strategy: "user",
            }
        }
    },
]

export default themeRoutes;