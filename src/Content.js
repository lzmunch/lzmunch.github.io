import React, { Component } from 'react';
import { Routes, Route, Link} from 'react-router-dom'; 
import './App.css';
import Gallery from './Gallery.js';
import Project from './Project.js';
import './Content.css';
import { 
  projectInfos,
} from './assets/pages/index'
var lastUpdateTime = require("../package.json").lzmunch.date 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: "home"
    };
  }
  render() {
    let pageLinks = getPageLinks();
    // let decor = {l:"<", r:">"};
    return (
        <div className="Content">
        <br></br>
            <div className="Header">
              <div id="name">
                <img width="70px" alt="site logo" src={require("./assets/logo.png")}/>
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
            <Routes>
                {pageLinks}
                <Route path={'/about'} key='about' element={<Project link="about"/>} />
                <Route path={'/all'} key='all' element={<Project link="all"/>} />
                <Route path={'/'} key='root' element={<Project link="home"/>} />
                <Route path={'/home'} key='home' element={<Project link="home"/>} />
            </Routes>
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
    items.push(<Route key={g} path={'/'+g} element={
      <div style={{maxWidth:"75%",marginLeft:"13%"}}>
        <Gallery current={g}/>
      </div>
    } />);
  }
  // project pages, from assets/pages/index.js
  for (let p of projectInfos) {
    console.log('link', p.link)
    items.push(<Route key='{p}' path={'/'+p.link} element={<Project link={p.link}/>} />);
  }
  return items;
}

export default App;