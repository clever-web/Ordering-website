import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box } from '@material-ui/core';

import Image from './Image';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  isloading: PropTypes.bool,
  iscollapse: PropTypes.bool
};

export default function Logo({ disabledLink = false, sx, isloading, iscollapse }) {
  // OR
  // const logo = '/logo/logo_single.svg';

  const logo =
    isloading || iscollapse ? (
      <Box sx={{ width: 50, height: 50, ...sx }}>
        <Image src="/static/logo/logo_single.svg" />
      </Box>
    ) : (
      <Box sx={{ width: 220, height: 60, ...sx }}>
        <Image src="/static/logo/logo_full.svg" />
      </Box>
    );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
