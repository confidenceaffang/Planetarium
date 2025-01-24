import React from 'react'
import logo from "../assets/logo.png"
import { useState, useEffect} from 'react'

const Dashboard = () => {
    const [showName, setShowName] = useState(false);
  return (
    <main>
          <section>
              <nav className='p-2'>
                  <div className='flex items-cente justifuy-center'>
                      <img src={logo} width={100} height={100} onMouseEnter={setShowName}/>
                      <span>
                      {user.name}
                  </span>
              </div>
          </nav>
      </section>
      <section>

          </section>
        </main>
  )
}

export default Dashboard
