import React from 'react';
import {Container } from 'react-bootstrap';
import axios from 'axios';
import DogsModel from '../data-model/DogsModel';
import { withRouter } from "react-router-dom";


class RacePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            race: "",
            dogsData: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({               
            race: id
        }); 

        const URL = `https://dog.ceo/api/breed/${id}/images`
        axios.get(URL).then(response => {  
            this.setState({               
                dogsData: response.data.message.map(result => new DogsModel(id,result))
            }); 
        })
      }

    
    render() {

        const dogs = this.state.dogsData;        
    

        const contentToRender= dogs.map((filterDog, index) =>
      
           <div key={index} className="col-xl-3 col-md-4 dogCard">
                <div className="card">
                    <a href={filterDog.imgUrl}>                  
                    <img className="card-img-bottom" src={filterDog.imgUrl} alt={filterDog.raceName}/>
                    </a> 
                </div>                
            </div>
            );
        

        return(
            <div className="wrap">
                <div className="up-box">
                   <h2>{this.state.race}</h2>
                </div> 

                <Container>
                    <div className="row">
                        {contentToRender}
                    </div>
                </Container> 
            </div>
        );

    }

}
export default withRouter(RacePage);