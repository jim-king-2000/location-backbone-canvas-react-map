import React, { Component } from 'react';
import { Select } from 'grommet';

const options = [{
  fullMap: true, label: '全图'
}, {
  fullMap: false, label: '底图'
}];

export class CanvasMapStyle extends Component {
  state = options[0]

  shouldComponentUpdate(nextProps) {
    if (nextProps.mapVendor !== this.props.mapVendor) {
      this.setState(options[0]);
      return false;
    }
    return true;
  }

  render() {
    const mapFeature = this.props.__map__.MapFeature;
    return <Select
      labelKey='label'
      options={options}
      value={this.state}
      onChange={({ option }) => {
        const fullMap = option.fullMap;
        if (fullMap === this.state.fullMap) return;
        mapFeature && mapFeature.setFullMap(fullMap);
        this.setState(option);
      }}
    />;
  }
}