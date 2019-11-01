import React from 'react';
import { Polyline, DomMarker } from 'location-backbone-react-map';
import { Radial } from 'grommet-icons';
import { ColorPool } from 'location-backbone-canvas';

export const CanvasLineAndMark = ({ lines, __map__ }) => (
  <>
    {Array.isArray(lines) && lines.map(line => (
      <React.Fragment key={line.id}>
        <Polyline
          __map__={__map__}
          path={line.polyLines}
          strokeColor={ColorPool.getColor(line.colorIndex)}
          strokeWeight={2}
        />
        {Array.isArray(line.stops) && line.stops.map((stop, i) => (
          <DomMarker
            __map__={__map__}
            key={`${stop.id}-${i}`}
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