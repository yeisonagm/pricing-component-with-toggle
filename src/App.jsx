import { Toggle } from './Toggle'
import { Pricing } from './Pricing'
import './App.css'

function App() {

  return (
    <div className='component'>
      <h1>Our Pricing</h1>
      <Toggle />

      <section className='component-pricingCard'>
        <Pricing
          title='Basic'
          price='$19.99'
          storage='500 GB Storage'
          numberUsers='2 '
          transfer='3' />

        <Pricing
          title='Professional'
          price='$24.99'
          storage='1 TB Storage'
          numberUsers='5'
          transfer='10' />

        <Pricing
          title='Master'
          price='$39.99'
          storage='2 TB Storage'
          numberUsers='10'
          transfer='20' />
      </section>

    </div>
  )
}

export default App
