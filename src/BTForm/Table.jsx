import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Table extends Component {
    renderTable = () => {
        let stt = 1;
        return this.props.mangNguoiDung.map((nd) => {
            return <tr key={nd.MaSV}>
                <td>{stt++}</td>
                <td>{nd.MaSV}</td>
                <td>{nd.hoTen} </td>
                <td>{nd.sdt}</td>
                <td>{nd.email}</td>
                <td>
                    <button className='btn btn-success mr-1'
                    onClick={() => { 
                        let action ={
                            type:"XEM_ND",
                            ndXem :nd
                        }
                        this.props.dispatch(action)
                     }}>Xem</button>
                    <button className='btn btn-info' onClick={() => { 
                        let action ={
                            type :"XOA_ND",
                            tkXoa:nd.MaSV
                        }
                        this.props.dispatch(action)
                     }}>Xóa</button>
                </td>

            </tr>
        })

    }
  render() {
    return (
        <div className="row">
        <div className="col-12">
            <h2 className='bg-dark text-white'>Danh Sách Người Dùng</h2>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">stt</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">số đt</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}
 const mapStateToProps = (rootReducer) => {
    return {
        mangNguoiDung: rootReducer.QLND.mangNguoiDung
    }
 }
export default connect(mapStateToProps)(Table)

