import ServerConfig from './app';
import './util/firebase';

class Server extends ServerConfig {
    private PORT:number = this.app.get('PORT');
    constructor() {
        super()
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log('Server to listen to port '+this.PORT);
        })
    }
}

new Server().listen();