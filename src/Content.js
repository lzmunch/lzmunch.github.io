import React, { Component, useEffect} from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
import './App.css';
import Gallery from './Gallery.js';
import Project from './Project.js';
import './Content.css';
import { 
  projectInfos,
  lastUpdateTime,
} from './assets/pages/index'

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: "home"
    };
  }
  render() {
    let pageLinks = getPageLinks();
    let decor = {l:"<", r:">"};
    return (
        <div className="Content">
        <br></br>
            <div className="Header">
              <div id="name">
                <img width="70px" src={require("./assets/logo.svg")}/>
                <br/>
                LAUREN ZHANG
              </div>
              <div id="buttons">
                <ButtonLink text="home" scope={this}></ButtonLink>
                <ButtonLink text="code" scope={this}></ButtonLink>
                <ButtonLink text="art" scope={this}></ButtonLink>
                <ButtonLink text="fun" scope={this}></ButtonLink>
                <ButtonLink text="about" scope={this}></ButtonLink>
              </div>
              <div id="line"></div>
              <br/>
            </div>
            <Switch>
                {pageLinks}
                <Route path={'/about'} component={() => <Project link="about"/>} />
                <Route path={'/all'} component={() => <Project link="all"/>} />
                <Route path={'/'} component={() => <Project link="home"/>} />
                <Route path={'/homepage'} component={() => <Gallery current="home"/>} />
            </Switch>
            <br/>
            <br/>
            <br/>
            <p>- - -</p>
            <p><i>Made with React</i></p>
            <p><i>Last updated {lastUpdateTime}</i></p>
            <br/>
        </div>
    );
  }
}

function ButtonLink(props) {
  let that = props.scope;
  return (
    <Link 
      className={"button " + (that.state.current === props.text ? "active" : "")} 
      to={"/"+props.text} 
      onClick={() => that.setState({current: props.text})}>
        {"[" + props.text + "]"}
    </Link>

  );
}

// Link pages from pages.json
// key prop of Route is to get rid of an error that insists it has a key idk
function getPageLinks() {
  let items = [];
  // gallery pages
  let galleries = ["code", "fun", "art"];
  for (let g of galleries) {
    items.push(<Route key={g} path={'/'+g} component={() => 
      <div style={{maxWidth:"75%",marginLeft:"13%"}}>
        <Gallery current={g}/>
      </div>
    } />);
  }
  // project pages, from assets/pages/index.js
  for (let p of projectInfos) {
    items.push(<Route path={'/'+p.link} component={() => <Project link={p.link}/>} />);
  }
  return items;
}

export default App;