import express, { Express } from "express";
import morgan from 'morgan';
import adminRoutes from "./routes/admin.routes";

class ServerConfig{
    private _app:Express = express();

    constructor() {
        this._app.set('PORT', 4000);
        this._app.use(express.json());
        this._app.use(morgan('dev'));
        adminRoutes(this._app);
    }

    get app(){
        return this._app;
    }
}

export default ServerConfig;