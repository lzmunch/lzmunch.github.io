import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
import '../App.css';
import Gallery from './gallery.js';
import Project from './project.js';
import './Content.css';

function ButtonLink(props) {
  let that = props.scope;
  console.log(props.text);
  // {"_" + props.text + "_"}
  return (
    <Link className={"button " + (that.state.current === props.text ? "active" : "")} to="/" onClick={() => that.setState({current: props.text})}>
      {props.text}
    </Link>

  );
}

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: "home"
    };
  }

  render() {
    return (
        <div className="Content">
        <br></br>
            <div className="Header">
              <div id="name">LAUREN ZHANG</div>
              <div id="buttons">
                <Link className={"button " + (this.state.current === "home" ? "active" : "")} to="/" onClick={() => this.setState({current: "home"})}>home</Link>
                <ButtonLink text="code" scope={this}></ButtonLink>
                <ButtonLink text="art" scope={this}></ButtonLink>
                <ButtonLink text="fun" scope={this}></ButtonLink>
                <ButtonLink text="about" scope={this}></ButtonLink>
              </div>
            </div>
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/painter'} component={() => <Project link="painter"/>} />
              <Route path={process.env.PUBLIC_URL + '/graphics'} component={() => <Project link="graphics"/>} />
            </Switch>
        </div>
    );
  }
}


export default App;