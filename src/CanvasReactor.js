import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import HalBMap from '../hal/HalBMap';
class HalBMap {}

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const halMap = new HalBMap(this.props.__map__);
    setTimeout(() => halMap.setFitView(), 50);
    if (this.props.onUpdateEnd) this.props.onUpdateEnd();
  }

  render() {
    if (!this.props.tracingMode) return null;

    const halMap = new HalBMap(this.props.__map__);
    const isMarkersInViewport = halMap.isInView(this.props.markers);
    if (!isMarkersInViewport) {
      halMap.setFitView();
    }
    return null;
  }
}