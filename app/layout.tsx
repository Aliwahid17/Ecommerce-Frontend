import '../styles/globals.css'
import Footer from './(components)/Footer'
import Navbar from './(components)/Navbar'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
