import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

export const DetailItem = () => {
    const {id} = useParams()
  return (
    <Layout>
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <div>DetailItem</div>
            <div>{id}</div>
        </div>
    </Layout>
  )
}

export default DetailItem