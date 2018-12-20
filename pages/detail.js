// Styles
import s from './index.scss';

// Packages
import Link from 'next/link'
import {withRouter} from 'next/router'

// Components
import { Default } from '../layouts';
import { Header } from '../sections';

// Code
const Content = ({router}) => {
  return (
    <Default>
      <p>Haber Detay: {router.query.newsId}</p>
    </Default>
  )
}

export default withRouter(Content)
