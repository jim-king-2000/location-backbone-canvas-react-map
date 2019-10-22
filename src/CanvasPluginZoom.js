import React from 'react';
import { Box, Button, CheckBox } from 'grommet';
import { Home, Add, Subtract } from 'grommet-icons';
import { observer } from 'mobx-react';
import { CanvasMapStyle } from './CanvasMapStyle';
// import HalBMap from '../hal/HalBMap';
class HalBMap

export const CanvasPluginZoom = observer(
  ({ __map__, tracingMode, onChange, ...props }) => {
    const halMap = new HalBMap(__map__);
    return (
      <Box margin='xsmall' gap='xsmall' align='center' {...props}>
        <Button plain={false} icon={<Home />}
          onClick={() => halMap.setFitView()} />
        <Button plain={false} icon={<Add />}
          onClick={() => halMap.zoomIn()} />
        <Button plain={false} icon={<Subtract />}
          onClick={() => halMap.zoomOut()} />
        <CheckBox toggle label='跟踪模式' checked={tracingMode}
          onChange={onChange} />
        <CanvasMapStyle __map__={__map__} />
      </Box>
    );
  }
);