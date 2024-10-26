import './App.css';

import React from 'react';

import Markdown from "marked-react";

import "bootstrap/dist/css/bootstrap.min.css";


/* New way of making components, but it doesn't work in the freeCodeCamp tutorial and tests: 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState( state => ({
      input: e.target.value
    }));
  }

  componentDidMount() {
    this.setState( state => ({
      input:  `# Welcome to my React Markdown Previewer!\n
When I enter markdown into the editor element, the text is rendered as HTML in the preview element as I type.\n
## This is a sub-heading...\n
You can make text **bold**... whoa!\n
Or _italic_.\n
Or... wait for it... **_both!_**\n
And feel free to go crazy ~~crossing stuff out~~.\n
### And here's some other cool stuff:\n
There's also [links](https://www.freecodecamp.org), and\n
> Block Quotes!\n
Heres some code, \`<div></div>\`, between 2 backticks.\n
\`\`\`
// this is multi-line code:

function anotherExample(firstLine) {
  if (firstLine) {
    return multiLineCode;
  }
}
\`\`\`\n
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:\n
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
` 
    }));
  }
  
  render() {
    
    return (
      <main className="App container-fluid">
          <section className="row">
            <div id="editor-cont" className="col-12 col-md-4 p-0">
              <textarea 
                rows="7" 
                className="p-5 pt-4 p-md-4"
                value={this.state.input} 
                onChange={this.handleChange} 
                id="editor">
              </textarea>
            </div>

            <article className="col-12 p-5 mt-0 col-md-8 mt-md-0" id="preview">
              <Markdown gfm={true} breaks={true}>{this.state.input}</Markdown>
            </article>
          </section>
      </main>
    );
  }
};

export default App;
