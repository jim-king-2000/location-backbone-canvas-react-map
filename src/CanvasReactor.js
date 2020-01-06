import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    const { setFitView, __map__, positions, onUpdateEnd } = this.props;
    if (!setFitView) return;

    const mapView = __map__ && __map__.MapView;
    if (!mapView) return;
    
    setTimeout(() => {
      mapView.setFitView(positions);
      onUpdateEnd && onUpdateEnd();
    }, 250);
  }

  render() {
    const { tracingMode, __map__, positions } = this.props;
    if (!tracingMode) return null;

    const mapView = __map__.MapView;
    if (!mapView) return null;

    if (!mapView.isInView(positions)) {
      setTimeout(() => mapView.setFitView(positions));
    }
    return null;
  }
}