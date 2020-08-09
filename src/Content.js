import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
import './App.css';
import Gallery from './Gallery.js';
import Project from './Project.js';
import './Content.css';

function ButtonLink(props) {
  let that = props.scope;
  console.log("buttonlink", that.state);
  // {"_" + props.text + "_"}
  return (
    <Link 
      className={"button " + (that.state.current === props.text ? "active" : "")} 
      to={"/"+props.text} 
      onClick={() => that.setState({current: props.text})}>
        {props.text}
    </Link>

  );
}

// Link pages from pages.json
// key prop of Route is to get rid of an error that insists it has a key idk
function getPageLinks() {
  let pagesJson = require("./assets/pages.json");
  console.log(pagesJson);
  let items = [];
  for (let page of pagesJson){
    let key = page.key;
    if (page.type == "gallery"){
      items.push(<Route key={key} path={'/'+key} component={() => <Gallery current={key}/>} />);
    } else {
      items.push(<Route key={key} path={'/'+key} component={() => <Project link={key}/>} />);
    }
  }
  // // gallery pages
  // let galleries = ["code", "fun", "art"];
  // for (let g of galleries) {
  //   items.push(<Route key={g} path={'/'+g} component={() => <Gallery current={g}/>} />);
  // }
  // // project pages
  // let projects = ["test", "test2", "mii"];
  // for (let p of projects) {
  //   items.push(<Route key={p} path={'/'+p} component={() => <Project link={p}/>} />);
  // }
  return items;
}

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: "home"
    };
  } 
  render() {
    let pageLinks = getPageLinks();
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
                {pageLinks}
                <Route path={'/'} component={() => <Project link="home"/>} />
            </Switch>
        </div>
    );
  }
}


export default App;