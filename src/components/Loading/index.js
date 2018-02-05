/**
 * @author zhuyaqin thea.zhu@foxmail.com
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'loading';

export default class Loading extends Component {
  static propTypes = {
    visible: PropTypes.bool
  };

  static defaultProps = {
    visible: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    return (
      <div className={`${prefixCls} ${visible ? 'show' : 'hide'}`}>
        <div className="progress-bar">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" r="30" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="30"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="square"
              transform="rotate(570 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50;720 50 50"
                keyTimes="0;0.5;1"
                dur="2s"
                begin="0s"
                repeatCount="indefinite" />
              <animate
                attributeName="stroke-dasharray"
                calcMode="linear"
                values="20 200;70 100;20 200"
                keyTimes="0;0.5;1"
                dur="2s"
                begin="0s"
                repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    );
  }
}
