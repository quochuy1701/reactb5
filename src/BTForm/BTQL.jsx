import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import Table from './Table'

export default class BTQL extends Component {
   
    render() {
       
        return (
            <div className='container'>
                <FormDangKy/>
                <Table/>
            </div>
        )
    }
}
