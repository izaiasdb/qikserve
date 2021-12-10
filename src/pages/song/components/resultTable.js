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
                <Table title={() =>  getTitleTable('SONG LIST')} 
                    rowKey={(row) => row.playCount}
                    dataSource={[...list]} size={"middle"}
                    onChange={this.handleTableChange}
                    pagination={Pagination()} 
                    scroll={{ x: 1300, y: 240 }}
                    >

                    <Table.Column key={'artist'} 
                        dataIndex={'artist'} 
                        title={<center>Artist</center>} 
                        align={ "left" }
                        width={200} 
                        fixed={'left'}
                        sorter={(a, b) => get(a, 'artist','').localeCompare(get(b, 'artist',''))}
                        sortOrder={columnKey === 'artist' && order}/>

                    <Table.Column key={'song'}
                        dataIndex={'song'}
                        title={'Song'}
                        align={"left"} 
                        width={200} 
                        fixed={'left'}                        
                        sorter={(a, b) => get(a, 'song','').localeCompare(get(b, 'song',''))}
                        sortOrder={columnKey === 'song' && order}/>                        

                    <Table.Column key={'songReleaseDate'}
                        dataIndex={'songReleaseDate'}
                        render={(text) => text && moment(text).format('YYYY/MM/DD')}
                        title={'Song Release'}
                        align={"center"}
                        width={100} 
                        sorter={(a, b) =>   moment(get(a, 'songReleaseDate', moment())) > moment(get(b, 'songReleaseDate', moment())) ? 1 : moment(get(a, 'songReleaseDate', moment())) < moment(get(b, 'songReleaseDate', moment())) ? -1 : 0  }
                        sortOrder={columnKey === 'songReleaseDate' && order} 
                        sortDirections={['ascend', 'descend', 'ascend']} />                  

                    <Table.Column key={'metricA'}
                        dataIndex={'metricA'}
                        title={'MetricA'}
                        align={"center"} />            

                    <Table.Column key={'metricB'}
                        dataIndex={'metricB'}
                        title={'MetricB'}
                        align={"center"} />                                    

                    <Table.Column key={'metricC'}
                        dataIndex={'metricC'}
                        title={'MetricC'}
                        align={"center"} />

                    <Table.Column key={'metricD'}
                        dataIndex={'metricD'}
                        title={'MetricD'}
                        align={"center"} />

                    <Table.Column key={'metricE'}
                        dataIndex={'metricE'}
                        title={'MetricE'}
                        align={"center"} />

                    <Table.Column key={'metricF'}
                        dataIndex={'metricF'}
                        title={'MetricF'}
                        align={"center"} />

                    <Table.Column key={'metricF'}
                        dataIndex={'metricF'}
                        title={'MetricF'}
                        align={"center"} />

                    <Table.Column key={'metricG'}
                        dataIndex={'metricG'}
                        title={'MetricG'}
                        align={"center"} />

                    <Table.Column key={'metricH'}
                        dataIndex={'metricH'}
                        title={'MetricH'}
                        align={"center"} />

                    <Table.Column key={'metricI'}
                        dataIndex={'metricI'}
                        title={'MetricI'}
                        align={"center"} />

                    <Table.Column key={'metricJ'}
                        dataIndex={'metricJ'}
                        title={'MetricJ'}
                        align={"center"} /> 

                    <Table.Column key={'metricK'}
                        dataIndex={'metricK'}
                        title={'MetricK'}
                        align={"center"} /> 

                    <Table.Column key={'metricL'}
                        dataIndex={'metricL'}
                        title={'MetricL'}
                        align={"center"} /> 

                    <Table.Column key={'metricM'}
                        dataIndex={'metricM'}
                        title={'MetricM'}
                        align={"center"} />                                                                                                                                                                                                                                                                        

                    <Table.Column key={'metricN'}
                        dataIndex={'metricN'}
                        title={'MetricN'}
                        align={"center"} />                                                                                                                                                                                                                                                                        


                    <Table.Column key={'metricO'}
                        dataIndex={'metricO'}
                        title={'MetricO'}
                        align={"center"} />


                    <Table.Column key={'metricP'}
                        dataIndex={'metricP'}
                        title={'MetricP'}
                        align={"center"} />
                </Table> 
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.song.data,
        fetching: state.song.fetching,
    }
}

const mapDispatchToProps = (dispatch) => ({    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultTable)