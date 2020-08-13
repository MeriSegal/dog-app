import React from 'react';
import {Container} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import DogsModel from '../data-model/DogsModel';


class DogsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            race: "",           
            dogsData: [], 
            id: -1   
        }
    }

    updateRace = (event) =>{
        this.setState({
            race: event.target.value
        });
    }



    getUrl = (race) =>{
        axios.get(`https://dog.ceo/api/breed/${race}/images/random`).then(response => {
            this.state.dogsData.push(new DogsModel(race,response.data.message))
            this.setState({
                dogsData: this.state.dogsData
            }); 
        })
      }
     

    componentDidMount() {

        const URL = "https://dog.ceo/api/breeds/list"
        axios.get(URL).then(response => {          
            response.data.message.map(race => 
                this.getUrl(race))
          })      

      }

    
    render() {

        const dogs = this.state.dogsData;        
    

        const contentToRender= dogs.filter(dog => (dog.raceName).toLowerCase().includes((this.state.race).toLowerCase())).map((filterDog, index) =>
      
           <div key={index}  className="col-xl-4">
                <div className="card">
                <div className="card-body">
                    <p className="card-text">{filterDog.raceName} </p>
                </div> 
                <img className="card-img-bottom" src={filterDog.imgUrl} alt={filterDog.raceName}/>
                </div>                
            </div>
            );
        

        return(
            <div className="wrap">
                <input type="search" id="race" placeholder="" onChange={this.updateRace} value={this.state.race}/>

                <Container>
                    <div className="row">
                        {contentToRender}
                    </div>
                </Container> 
            </div>
        );

    }

}
export default DogsPage;