import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const mapView = this.props.__map__.MapView;
    if (!mapView) return;
    setTimeout(() => {
      mapView.setFitView(this.props.positions);
      if (this.props.onUpdateEnd) this.props.onUpdateEnd();
    }, 100);
  }

  render() {
    const { tracingMode, __map__, positions } = this.props;
    if (!tracingMode) return null;

    const mapView = __map__.MapView;
    if (!mapView) return null;

    if (!mapView.isInView(positions)) {
      mapView.setFitView(positions);
    }
    return null;
  }
}