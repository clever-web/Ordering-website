// Path
import Iconify from '../../components/Iconify';
// routes
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Login',
    icon: <Iconify icon="eva:home-fill" {...ICON_SIZE} />,
    path: PATH_AUTH.login
  }
];

export default menuConfig;
