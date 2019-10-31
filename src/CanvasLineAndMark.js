import React from 'react';
import { Polyline, DomMarker } from 'location-backbone-react-map';
import { Radial } from 'grommet-icons';
import { ColorPool } from 'location-backbone-canvas';

export const CanvasLineAndMark = ({ lines, __map__ }) => (
  <>
    {lines && lines.map(line => (
      <React.Fragment key={line.id}>
        <Polyline
          __map__={__map__}
          path={line.polyLines}
          strokeColor={ColorPool.getColor(line.colorIndex) ||'#006600'}
        />
        {line.stops && line.stops.map(stop => (
          <DomMarker
            __map__={__map__}
            key={stop.id}
            position={stop.location}
            extData={stop}
          >
            <Radial
              size='small'
              color={ColorPool.getColor(line.colorIndex)}
            />
          </DomMarker>
        ))}
      </React.Fragment>
    ))}
  </>
);