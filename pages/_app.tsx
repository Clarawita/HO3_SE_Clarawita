import type { AppProps } from 'next/app'
import "./global.css"
import {Poppins} from "@next/font/google"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.variable}>
      <Component {...pageProps} />
    </main>
  )
}