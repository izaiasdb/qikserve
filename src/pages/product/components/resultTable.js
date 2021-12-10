import React, { Component } from 'react'
import { Card, Table, Tooltip, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'
import { isNil , isArray , get } from 'lodash'

import { getTitleTable , getTagSimNao } from '../../util/helper'
import Action from '../redux'
import Pagination from '../../util/Pagination'

class ResultTable extends Component {

    state = {
        sorter: null,
        searchText: '',
        searchedColumn: '',        
    };

    handleTableChange = (pagination, filters, sorter) => {
        let { columnKey, order } = sorter
        this.setState({ sorter })
    };

    render() {

        const { list = [] } = this.props
        let { sorter } = this.state;
        sorter = sorter || {}
        let { columnKey, order } = sorter

        return (
            <Card
                bordered={false} >
                <Table title={() =>  getTitleTable('PRODUCT LIST')} 
                    rowKey={(row) => row.id}
                    dataSource={[...list]} size={"middle"}
                    onChange={this.handleTableChange}
                    pagination={Pagination()} 
                    >

                    <Table.Column key={'name'} 
                        dataIndex={'name'} 
                        title={<center>Name</center>} 
                        align={ "left" }
                        width={400} 
                        fixed={'left'}
                        sorter={(a, b) => get(a, 'name','').localeCompare(get(b, 'name',''))}
                        sortOrder={columnKey === 'name' && order}/>

                    <Table.Column key={'price'}
                        dataIndex={'price'}
                        title={'Price'}
                        align={"left"} 
                        width={200} 
                        fixed={'left'}                        
                        sorter={(a, b) => get(a, 'price','').localeCompare(get(b, 'price',''))}
                        sortOrder={columnKey === 'price' && order}/>
                </Table> 
            </Card>
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
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultTable)