import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty, get, isEqual } from 'lodash'
import { Spin } from 'antd'

import Action from '../redux'
import Search from '../components/search'
import ResultTable from '../components/resultTable'
import { openNotification } from '../../util/notification'
import { SEARCHING } from '../../util/state'
import { getHeader } from '../../util/helper'

class Product extends Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        const message = get(nextProps, ['message'], "")

        if (!isEmpty(message)) {
            openNotification(message)
            this.props.cleanMessage()
        }
    }

    render() {
        const { fetching, state } = this.props
        return (<Spin spinning={fetching}>
            {getHeader('Products')}
            {
                isEqual(state, SEARCHING) &&
                <div>
                    <Search />
                    <ResultTable />
                </div>
            }
        </Spin>)
    }

}

const mapStateToProps = (state) => {
    return {
        ...state.product.data,
        fetching: state.product.fetching,
        state: state.product.state,
    }
}

const mapDispatchToProps = (dispatch) => ({
    cleanMessage: () => dispatch(Action.productCleanMessage()),
    clean: () => dispatch(Action.productClean()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product)