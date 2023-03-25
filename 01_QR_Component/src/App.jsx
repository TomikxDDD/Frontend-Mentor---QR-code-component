import './App.css'

import QR_Component from './components/QR_Component'

function App() {

  return (
    <QR_Component imgPath={"/image-qr-code.png"} title={"Improve your front-end skills by building projects"} text={"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"}/>
  )
}

export default App
