import './dev.scss';
import ReactIframeForm from './main';

/*===example start===*/

// install: npm install afeiship/react-iframe-form --save
// import : import ReactIframeForm from 'react-iframe-form'

class App extends React.Component{
  state = {
    param1:'value1',
    param2:'value2-21313',
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }


  _onClick =e =>{
    this.refs.rc.submit();
  };

  render(){
    return (
      <div className="hello-react-iframe-form">
        <button onClick={this._onClick}>Test submit</button>
        <ReactIframeForm ref='rc'>
          <input type="hidden" name="param1" value={this.state.param1}/>
          <input type="hidden" name="param2" value={this.state.param2}/>
        </ReactIframeForm>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
