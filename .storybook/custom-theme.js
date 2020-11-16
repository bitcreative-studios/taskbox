import { create } from '@storybook/theming'
import logo from '../src/assets/bit.cr81v_logo.png'

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: logo,
})
