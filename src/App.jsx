import { Toggle } from './Toggle'
import { Pricing } from './Pricing'
import { useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='component'>
      <h1 className="component-title">Our Pricing</h1>

      <div className='component-toggle'>
        <span className='toggle-text'>Annually</span>
        <Toggle onToggle={handleToggle} />
        <span className='toggle-text'>Monthly</span>
      </div>

      <section className='component-pricingCard'>
        <Pricing
          title='Basic'
          price={toggle ? '$ 19.99' : '$ 199.99'}
          storage='500 GB Storage'
          numberUsers='2 '
          transfer='3' />

        <Pricing
          title='Professional'
          price={toggle ? '$ 24.99' : '$ 249.99'}
          storage='1 TB Storage'
          numberUsers='5'
          transfer='10' />

        <Pricing
          title='Master'
          price={toggle ? '$ 39.99' : '$ 399.99'}
          storage='2 TB Storage'
          numberUsers='10'
          transfer='20' />
      </section>

    </div >
  )
}

export default App;
