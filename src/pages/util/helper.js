import React from 'react'
import { isNil, isEmpty, isNumber } from 'lodash'
import { Select, Breadcrumb, Card, Icon , Tag } from 'antd'

const Option = Select.Option

export const generateOptions = (elements) => {
    if (isNil(elements) || isEmpty(elements)) return
    
    return elements.map(({ key, id, descricao, nome }) => <Option key={key || id} value={id} >{ nome || descricao }</Option>)
}

export const generateOptionsNumbers = ( valorInicial , qtdPeriodo ) => {

    if ( isNil(valorInicial) || !isNumber(valorInicial) || !isNumber(qtdPeriodo) || isNil(qtdPeriodo) ) return

    let numbersArray = new Array();
    for(let contador = valorInicial ; contador < valorInicial + qtdPeriodo ; contador++){
        numbersArray.push(contador)
    }

    return (
        numbersArray.map(item => (
            <Select.Option key={item} value={item}>
                {item}
            </Select.Option>
        ))
    )
}

export const distinct = (value, index, array) => (array.indexOf(value) === index)

export const onlyNumbers = (value) => (String(value).replace(/\D/gi,''))

export const getTitle = (text) => <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{text}</span>

export const getTitleTable = (text) => <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{text}</span>

export const getHeader = (text) => 
<div>
    <Card style={{ backgroundColor: '#5AB57E', height: 35}}>
    {/* <Card style={{ backgroundColor: '#fc6836', height: 50}}>              */}
        {/* <h1 style={{ color: '#fff'}}>{props.titulo}</h1> */}
        <Breadcrumb separator="" style={{ color: '#fff'}}>
            <Breadcrumb.Item href="/" style={{ color: '#fff'}}>
                <Icon type="home" />
                <span> Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item style={{ color: '#fff'}}>{text}</Breadcrumb.Item>
        </Breadcrumb>                
    </Card>    
</div>
