import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import ListItem from './pages/ListItem'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import { unstable_HistoryRouter as HistoryRouter,BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailItem from './pages/DetailItem'
import CharacterList from './pages/CharacterList'
import ButtonDemo from './pages/ButtonDemo'
import CharacterDetail from './pages/CharacterDetail'
import NotFound from './pages/NotFound'
import { createBrowserHistory } from 'history'
import Login from './pages/Login'
import Counter from './pages/Counter'

export default class App extends Component {
  history = createBrowserHistory()
  render() {
    return (
      <HistoryRouter history={this.history}>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='404' element={<NotFound />} />
            <Route path='list' element={<ListItem />} />
            <Route path='vehicles' element={<ListItem />} />
            <Route path='vehicles/:id' element={<DetailItem />} />
            <Route path='features' element={<Features />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='buttondemo' element={<ButtonDemo />} />
            <Route path='characters' element={<CharacterList />} />
            <Route path='login' element={<Login />} />
            <Route path='counter' element={<Counter />} />
            <Route path='characters/:id' element={<CharacterDetail history={this.history} />} />
          </Routes>
        {/* </BrowserRouter> */}
      </HistoryRouter>
    )
  }
}
