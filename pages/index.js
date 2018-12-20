// Styles
import s from './index.scss';

// Packages
import Link from 'next/link'
import Button from '@material-ui/core/Button';

// Components
import { Default } from '../layouts';
import { Header } from '../sections';
import Card from '../components/Card';

// Code
const Index = () => (
  <Default>
    <Button variant="contained" color="primary">
      Material Button
    </Button>
    <Card />
  </Default>
)

export default Index
