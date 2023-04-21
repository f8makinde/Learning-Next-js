import Link from "next/link"
import "../styles/global.css"
import { useRouter } from "next/router"
const App = ({Component, pageProps}) => {
  const route = useRouter()
  return (
    <>
     <div>
       <h1>OurSite</h1>
       <nav className="header-nav">
         <ul>
           <li>
            <Link className={route.pathname == '/' ? "active" : ""} href='/'>Home</Link>
           </li>
           <li>
           <Link className={route.pathname == '/about' ? "active" : ""}  href='/about'>About</Link>
           </li>
           <li>
           <Link className={route.pathname == '/blog' ? "active" : ""}   href='/blog'>Blog</Link>
           </li>
         </ul>
       </nav>
     </div>
      <Component {...pageProps}/>
      <p>Footer</p>
    </>
  )
}

export default App
