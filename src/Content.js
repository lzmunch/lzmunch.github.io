import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
import './App.css';
import Gallery from './Gallery.js';
import Project from './Project.js';
import './Content.css';
import { projectInfos } from './assets/pages/index'

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
              <p style={{fontWeight:"bold"}}>WIP migration from <a href="https://zhauren.wixsite.com/home">https://zhauren.wixsite.com/home</a></p>
              <div id="name">LAUREN ZHANG</div>
              <div id="buttons">
                <ButtonLink text="home" scope={this}></ButtonLink>
                <ButtonLink text="code" scope={this}></ButtonLink>
                <ButtonLink text="art" scope={this}></ButtonLink>
                <ButtonLink text="fun" scope={this}></ButtonLink>
                <ButtonLink text="about" scope={this}></ButtonLink>
              </div>
              <div style={{width:"100%", height:"2px", background:"black"}}></div>
              <br/>
            </div>
            <Switch>
                {pageLinks}
                <Route path={'/homepage'} component={() => <Project link="home"/>} />
                <Route path={'/about'} component={() => <Project link="about"/>} />
                <Route path={'/'} component={() => <Gallery current="home"/>} />
            </Switch>
        </div>
    );
  }
}

function ButtonLink(props) {
  let that = props.scope;
  console.log("buttonlink", that.state);
  // {"_" + props.text + "_"}
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
    items.push(<Route key={g} path={'/'+g} component={() => <Gallery current={g}/>} />);
  }
  // project pages, from assets/pages/index.js
  for (let p of projectInfos) {
    items.push(<Route path={'/'+p.link} component={() => <Project link={p.link}/>} />);
  }
  return items;
}

export default App;