import React from 'react'

import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'

export const ButtonDemo = () => {
  return (
    <Layout>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Button block>Hello</Button>
                </div>
                <div className='col'>
                    <Button onClick={()=>{alert('Hei!')}}>Hello</Button>
                </div>
                <div className='col'>
                    <Button variant='danger'>Hello</Button>
                </div>
                <div className='col'>
                    <Button variant='warning'>Hello</Button>
                </div>
                <div className='col'>
                    <Button variant='brown'>Hello</Button>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Input type='text'  variant='underlined' />
                </div>
                <div className='col'>
                    <Input type='email' placeholder='Enter your Email' variant='underlined' />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                </div>
                <div className='col'>
                    <Select variant='custom'>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                </div>
                <div className='col'>
                    <Select className='custom'>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ButtonDemo