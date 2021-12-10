import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Switch, BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import ptBR from 'antd/es/locale-provider/pt_BR';

import './assets/css/index.css'
import Routes from './routes';
import { configureStore } from './store/index'

require("moment/locale/pt-br")

const store = configureStore({})
const Root = () => (<Provider store={store}>            
                <ConfigProvider locale={ptBR}>
                    <BrowserRouter>
                        <Switch>
                            <Routes />
                        </Switch>
                    </BrowserRouter>
                </ConfigProvider>
            </Provider>)

render(<Root />, document.getElementById('root'));
