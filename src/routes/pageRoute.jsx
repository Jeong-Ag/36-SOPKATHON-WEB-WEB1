import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/constants/path'

import Home from '@/pages/Home'
import Test from '@/pages/Test'
import Result from '@/pages/Result'

const pageRoute = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.TEST,
    element: <Test />,
  },
  {
    path: PATH.RESULT,
    element: <Result />,
  },
])

export default pageRoute
