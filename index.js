/*!
 * Teo.JS helmet extension
 * based on https://github.com/helmetjs/helmet
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 11/30/16
 */

"use strict";

const helmet = require("helmet");
const config = require("helmet/config");

module.exports = {
    extension(app, options = {}) {  // the same options object supported as in https://github.com/helmetjs/helmet
        const middlewares = Object.keys(helmet);
        middlewares.forEach((middlewareName) => {
            const middleware = helmet[middlewareName];
            const option = options[middlewareName];
            const isDefault = config.defaultMiddleware.indexOf(middlewareName) !== -1;

            if (option === false) { return }

            if (option != null) {
                const createdMiddleware = middleware(option === true ? {} : option);
                app.middleware(function* (next) {
                    yield function(next) {
                        createdMiddleware(this.req, this.res, next);
                    }.bind(this);
                    yield next;
                });
            } else if (isDefault) {
                const createdMiddleware = middleware({});
                app.middleware(function* (next) {
                    yield function(next) {
                        createdMiddleware(this.req, this.res, next);
                    }.bind(this);
                    yield next;
                });
            }
        });
    }
};