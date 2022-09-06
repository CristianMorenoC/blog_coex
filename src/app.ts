import express, { Express } from "express";
import morgan from 'morgan';

class ServerConfig{
    private _app:Express = express();

    constructor() {
        this._app.set('PORT', 4000);
        this._app.use(express.json());
        this._app.use(morgan('dev'));
    }

    get app(){
        return this._app;
    }
}

export default ServerConfig;