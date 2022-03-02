import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import Input from '../components/Input'
import Button from '../components/Button'
import { Navigate } from 'react-router-dom'

export const Login = ({auth, dispatch, counter}) => {

  useEffect(()=>{
    console.log(auth);
  })

  const onLogin = (e)=>{
    e.preventDefault()
    dispatch({
      type: 'LOGIN',
      payload: {
        email: e.target.elements['email'].value,
        password: e.target.elements['password'].value
      }
    })
  }

  const onLogout = ()=>{
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <Layout>
      {auth.token!==null && <Navigate to='/' />}
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <form onSubmit={onLogin}>
          <div>
            <h1>{counter.num}</h1>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Input variant='underlined' name='email' id='email' />
          </div>
          <div className='mt-3'>
            <label htmlFor='password'>Password</label>
            <Input variant='underlined' name='password' id='password' />
          </div>
          <div className='mt-3'>
            <Button type='submit' block>Login</Button>
          </div>
          <div className='mt-3'>
            <Button onClick={onLogout} variant='warning' type='button' block>Logout</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({auth:state.auth, counter: state.counter})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Login)