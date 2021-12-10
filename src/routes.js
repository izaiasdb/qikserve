import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import LandingPage from './pages/landing/container/landing'
import Song from './pages/song/container/song'
import Product from './pages/product/container/product'

const Routes = () => (            
    <React.Fragment>            
        <Route exact path='/' component={LandingPage} />        
        <Route exact path='/song' component={Song} />
        <Route exact path='/product' component={Product} />
    </React.Fragment>
);

class App extends React.Component {
    render (){
        return <Routes />
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)