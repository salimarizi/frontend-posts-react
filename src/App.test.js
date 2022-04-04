import { render as rtlRender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'

import HomePage from './components/Home'

const render = component => rtlRender(
  <Provider store={store}>
    { component }
  </Provider>
)

test('Test Home Page', () => {
  render(<HomePage />)
  expect(screen.getByText('Latest from our Blog')).toBeInTheDocument()
})
