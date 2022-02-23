import React from 'react'
import Layout from '../components/Layout'
import { Link, useSearchParams } from 'react-router-dom'

export const Homepage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  return (
    <Layout>
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div>Homepage</div>
            <div>{searchParam.get("page")}</div>
            <Link className='btn btn-primary' to='/list'>Go to List Item</Link>
        </div>
      </Layout>
    )
}

export default Homepage