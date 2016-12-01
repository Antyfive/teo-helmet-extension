# teo-helmet-extension
Teo.JS extension middleware based on [helmet](https://github.com/helmetjs/helmet) module.
## Installation 
`npm i -S teo-helmet-extension`
## Teo.JS Config Example
```javascript
module.exports = {
    protocol: "http",
    host: "localhost",
    port: 3100,
    cluster: {
        enabled: true
    },
    extensions: [
        {
            name: "helmet",
            module: "teo-helmet-extension",
            config: {}, // feel free to pass your configuration object based on https://github.com/helmetjs/helmet
        }
    ],
};
```
