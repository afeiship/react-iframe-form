import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';


export default class extends PureComponent{
  /*===properties start===*/
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
  /*===properties end===*/

  submit(){
    const {iframeForm} = this.refs;
    iframeForm.submit();
  }

  render(){
    const {className, children, encType, action, method, onSubmit, ...props} = this.props;
    return (
      <section className={classNames('react-iframe-form',className)}>
          <form
          ref='iframeForm'
          method={method}
          action={action}
          encType={encType}
          target="reactHiddenIframe"
          {...props}
          onSubmit={onSubmit}>
              {children}
          </form>
          <iframe src="about:blank" id="hiddenFrame" name="reactHiddenIframe" hidden/>
      </section>
    );
  }
}
