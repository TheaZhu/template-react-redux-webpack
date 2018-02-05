import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import autobind from '../../../decorators/autobind';
import { selectors, actions } from '../../../models/mainModel';

import './Home.less';

const prefixCls = 'home';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    dataList: PropTypes.array
  };

  static defaultProps = {
    dataList: []
  };

  constructor(props) {
    super(props);
  }

  @autobind
  getDataList() {
    this.props.dispatch(actions.getDataList('home'));
  }

  render() {
    const { dataList } = this.props;
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-title`}>Hello World!</div>
        <span className="icon-arrow-right clickable" onClick={this.getDataList} />
        <div>
          {dataList.map(item => <div key={item}>{item}</div>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return selectors.getMainData(state);
}

export default connect(mapStateToProps)(Home);
