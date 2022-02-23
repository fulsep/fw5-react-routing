import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import ListItem from './pages/ListItem'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailItem from './pages/DetailItem'
import CharacterList from './pages/CharacterList'

export default class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='list' element={<ListItem />} />
          <Route path='vehicles' element={<ListItem />} />
          <Route path='vehicles/:id' element={<DetailItem />} />
          <Route path='features' element={<Features />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='characters' element={<CharacterList />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
