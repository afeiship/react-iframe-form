# react-iframe-form
> A react compatible file library, supports submit form upload or download resource by iframe.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    encType:PropTypes.string,
    method:PropTypes.string,
    action:PropTypes.string,
  };

  static defaultProps = {
    encType:'multipart/form-data',
    method:'post',
    action:'/',
  };
  
```

## usage:
```jsx

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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

