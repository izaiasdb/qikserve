import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button ,Form ,Divider } from 'antd'

import Action from '../redux'
import { openNotification } from '../../util/notification'
import { getTitle } from '../../util/helper'

class Search extends Component {

    search = e => {
        this.props.cleanTable();
        e.preventDefault();

        this.props.form.validateFields((err, { obj }) => {
            if (!err) {
                this.props.search()
            } else {
                openNotification({tipo: 'warning', descricao: 'Existem campos obrigatórios a serem preenchidos.'})
            }
        });
    };

    limpar = () => {
        const { cleanTable, form: { resetFields } } = this.props
        cleanTable()
        resetFields()
    }

    getExtra = () => {
        return (
            <div>
                <Button type={"primary"}
                    htmlType="submit"
                    onClick={this.search} >
                    Search
                </Button>
                <Divider type="vertical" />    
                <Button 
                    onClick={this.limpar} >
                    Clean
                </Button>                
            </div>
        )
    }
    
    render() {
        const { form: { getFieldDecorator }} = this.props

        return (
            <Form>
                 <Card title={getTitle("Search Product")}
                    extra={this.getExtra()}
                    style={{ marginBottom: '10px' }}>
                </Card>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.product.data,
        fetching: state.product.fetching,
    }
}

const mapDispatchToProps = (dispatch) => ({
    cleanMessage: () => dispatch(Action.productCleanMessage()),
    cleanTable: () => dispatch(Action.productCleanTable()),
    search: () => dispatch(Action.productSearch()),
})

const wrapedSearch = Form.create()(Search)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(wrapedSearch)