// Styles
import s from './index.scss';

// Packages
import Link from 'next/link'
import Button from '@material-ui/core/Button';

// Components
import { Default, CenteredGrid } from '../layouts';
import { Header } from '../sections';
import { ImgMediaCard } from '../components';

// Code
const Index = () => (
  <Default>
    <Button variant="contained" color="primary">
      Material Button
    </Button>
    <ImgMediaCard />

    <div>

    <CenteredGrid />
    </div>
  </Default>
)

export default Index
