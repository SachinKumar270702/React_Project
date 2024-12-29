
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import Header from './Header'


const root = createRoot(document.getElementById('root'))
root.render(
  <Page />
)

function MainContent() {
  return (
    <div className="content">

      <h1>Reasons I'm Excited to learn React</h1>
      <ol className="list-content">
        <li className='list-content-items'>im Sachin kumar, im so exited to be here because i wanted to learn raect from a very long time</li>
        <li className='list-content-items'>I like to learn react cause it is highly damamneded lag.</li>
        <li className='list-content-items'>i would like to create more things in React</li>
      </ol>
    </div>
  )
}

function Footer(){
  return(
    <footer className='footer-content'>
      <small>© 2024 kumar development.All rights reserved.</small>
    </footer>
  )
}
function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}
