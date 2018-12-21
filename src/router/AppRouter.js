import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import ContactPage from '../components/ContactPage'
import AboutPage from '../components/AboutPage'
import ProjectItem from '../components/ProjectItem'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:id" component={ProjectItem} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter
