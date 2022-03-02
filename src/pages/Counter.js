import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export const Counter = () => {
  const {counter} = useSelector(state=>state)

  const dp = useDispatch()


  useEffect(()=>{
    console.log(counter);
  }, [counter])

  const onIncrement = (e)=>{
    dp({type: 'INCREMENT'})
  }

  const onDecrement = ()=>{
    // dispatch({
    //   type: 'DECREMENT'
    // })
    dp({type: 'DECREMENT'})
  }

  return (
    <Layout>
      <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='row'>
          <div className='col'>
            <Button onClick={onDecrement}>-</Button>
          </div>
          <div className='col'>
            <h1>{counter.num}</h1>
          </div>
          <div className='col'>
            <Button onClick={onIncrement}>+</Button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='d-grid'>
              <Link to='/login' className='btn btn-brown'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// const mapStateToProps = state => ({auth:state.auth, counter: state.counter})

// const mapDispatchToProps = dispatch => ({dispatch})

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter