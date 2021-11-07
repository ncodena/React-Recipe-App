import React, {Component} from 'react';
import Hobbies from './hobbies';
class Pet extends Component {
    render () {

        
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img src="https://www.hola.com/imagenes/estar-bien/20210223184909/mi-gato-me-amasa-causas/0-925-122/gato-manta-3t-t.jpg?filter=w600" alt="cat"/>
                <h5>Hobbies:</h5>
                <Hobbies/>

            </div>
        );
    }
}

export default Pet;