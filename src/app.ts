import express, { Express } from "express";

class ServerConfig{
    private _app:Express = express();

    constructor() {
        this._app.set('PORT', 4000);
    }

    get app(){
        return this._app;
    }
}

export default ServerConfig;