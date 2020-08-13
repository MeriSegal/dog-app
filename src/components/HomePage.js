import React from 'react';
import { Jumbotron,Button } from 'react-bootstrap';

class HomePage extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {

        return (   
            <div>
                <Jumbotron className="home">
                    <h1>Dog Book</h1>
                    <p>Man's Best Friend</p>
                    <Button variant="primary" href="#/dogs">Woof!</Button>        
                </Jumbotron>
            </div>         
        
        );
    }
}

export default HomePage;