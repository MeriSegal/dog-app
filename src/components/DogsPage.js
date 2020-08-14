import React from 'react';
import {Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import DogsModel from '../data-model/DogsModel';


class DogsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            race: "", 
            raceList: [],          
            dogsData: [],
            id: -1
        }
    }

    updateRace = (event) =>{
        this.setState({
            race: event.target.value
        });
    }

    racePage = (raceName) =>{
        this.setState({
            id: raceName,
        });
    }

    getUrl = (race, isUpdate) =>{
        axios.get(`https://dog.ceo/api/breed/${race}/images/random`).then(response => {
            isUpdate ?
            this.state.dogsData.find(dog => dog.raceName === race).imgUrl = response.data.message:
            this.state.dogsData.push(new DogsModel(race,response.data.message))
            this.setState({               
                dogsData: this.state.dogsData
            }); 
        })
      }
     
    updateUrl =()=>{
         this.state.raceList.map(race => this.getUrl(race, true))
    }

    componentDidMount() {

        const URL = "https://dog.ceo/api/breeds/list"
        axios.get(URL).then(response => {  
            this.setState({
                raceList: response.data.message
            })
            response.data.message.map(race => 
                this.getUrl(race, false))                
            })      

      }

    
    render() {

        if (this.state.id !== -1) {
            const redirectPath = `/dogs/${this.state.id}`
            return <Redirect to={redirectPath}/>
        }

        const dogs = this.state.dogsData; 

        const contentToRender= dogs.filter(dog => (dog.raceName).toLowerCase().includes((this.state.race).toLowerCase())).map((filterDog, index) =>
      
           <div key={index} className="col-xl-3 col-md-4 dogCard">
                <div className="card">                    
                    <div className="card-body">
                        <h2 type="button" onClick={() =>this.racePage(filterDog.raceName)} href="" className="card-text">{filterDog.raceName} </h2>
                    </div> 
                    <img className="card-img-bottom" src={filterDog.imgUrl} alt={filterDog.raceName}/>
                </div>                
            </div>
            );
        

        return(
            <div className="wrap">
                <div className="up-box">
                    <div className="l-box">
                        <lable for="race" >Search: </lable>
                        <input  type="search" id="race" placeholder="" onChange={this.updateRace} value={this.state.race}/>
                    </div>
                    <div className="r-box">
                        <button type="button" onClick={this.updateUrl}>Update Images</button>
                    </div>
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
export default DogsPage;