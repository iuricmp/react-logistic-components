import React from 'react';

const VehicleMarkerDialog = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default VehicleMarkerDialog
