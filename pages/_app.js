// import '@/styles/globals.css'
import '@/styles/1213prac.css'
import '@/styles/product-table.css'
import '@/styles/dark-light.css'
// 3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeProvider } from '@/hooks/use-theme'
import { ThemeContext } from '@/context/theme'

import { CartProvider } from '@/hooks/use-cart'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const [color, setColor] = useState('light') // 'light' | 'dark'
  const toggleColor = () =>
    color === 'light' ? setColor('dark') : setColor('light')

  return (
    <CartProvider>
      <ThemeProvider value={{ color: color, setColor: setColor }}>
        <ThemeContext.Provider value={{ color, toggleColor }}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeContext.Provider>
      </ThemeProvider>
    </CartProvider>
  )
}
