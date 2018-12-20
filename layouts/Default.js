import { Header } from '../sections'

const DefaultLayout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)

export const Default = DefaultLayout
