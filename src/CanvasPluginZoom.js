import React from 'react';
import { Box, Button, CheckBox } from 'grommet';
import { Home, Add, Subtract } from 'grommet-icons';
import { observer } from 'mobx-react';
import { CanvasMapStyle } from './CanvasMapStyle';

export const CanvasPluginZoom = observer(
  ({ __map__, positions, tracingMode, onChange, mapVendor, ...props }) => {
    if (!__map__) return null;
    const mapView = __map__.MapView;
    return (
      <Box margin='xsmall' gap='xsmall' align='center' {...props}>
        <Button plain={false} icon={<Home />}
          onClick={() => mapView && mapView.setFitView(positions)} />
        <Button plain={false} icon={<Add />}
          onClick={() => mapView && mapView.zoomIn()} />
        <Button plain={false} icon={<Subtract />}
          onClick={() => mapView && mapView.zoomOut()} />
        <CheckBox
          toggle
          label='跟踪模式'
          checked={tracingMode}
          onChange={onChange}
        />
        <CanvasMapStyle
          __map__={__map__}
          mapVendor={mapVendor}
        />
      </Box>
    );
  }
);