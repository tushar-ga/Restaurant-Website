import React, {Component} from 'react';
import Menu from './MenuComponent'
import {DISHES} from "../shared/dishes"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'
class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        dishes : DISHES,
        };
    }
    render(){
      const HomePage = () => {
        return (
            <Home/>
        );
      }
        return (
            <div>
              <Header />
              <div className="container">
                <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route exact path="/menu" component={()=> {return (
                    <Menu dishes={this.state.dishes}/>
                  );}}/>
                  <Redirect to="/home"/>
                </Switch>
              </div>
              <Footer />
            </div>
          );
    }
 
}

export default Main;
