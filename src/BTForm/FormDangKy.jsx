import React, { Component } from 'react'
import { connect } from 'react-redux';
class FormDangKy extends Component {
    state = {
        values: {
            MaSV: "",
            hoTen: "",
            sdt: "",
            email: "",
        },
        errors: {
            MaSV: "",
            hoTen: "",
            sdt: "",
            email: "",
        },
        timkiem: {
            tukhoa :"",
        }
    }
    handleOnChange = (event) => {
        let { value, name } = event.target
        let newValue = { ...this.state.values }
        newValue[name] = value
        let messageError = "";
        let typeform = event.target.getAttribute("typeform")
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (typeform === "email") {
            if (!regexp.test(value)) {
                messageError = `${name} chưa đúng định dạng`
            }
        }
        if (value.trim() === "") {
            messageError = `${name} không được để trống`
        }
        let newErrors = { ...this.state.errors }
        newErrors[name] = messageError;
        this.setState({
            values: newValue,
            errors: newErrors,
        })

    }
    handleOnChange1 = (event) => {
        event.preventDefault()
        let { value , name } = event.target
        let newTukhoa = {...this.state.timkiem}
        newTukhoa[name] = value;
        this.setState({
            timkiem : newTukhoa
        })
        // let action ={
        //     type: "TIM_DATA_FORM",
        //     value,
        // }
        // this.props.dispatch(action)
    }
    handleonSearch = (event) => {
        event.preventDefault()
          let action ={
            type: "TIM_DATA_FORM",
            value : this.state.timkiem.tukhoa
        }
        this.props.dispatch(action)
    }
    handleonSubmit = (event) => {
        event.preventDefault()
        let isValid = true;
        for (const property in this.state.errors) {
            console.log(property)
            if (this.state.errors[property] !== "") {
                isValid = false;
            }
        }
        for (const property in this.state.values) {
            if (this.state.values[property] === "") {
                isValid = false;
            }
        }
        if (isValid) {
            let action = {
                type: "THEM_ND",
                nd: this.state.values,
            }
            this.props.dispatch(action)
        } else {
            alert("form không được để trống")
        }
    }
    
    componentWillReceiveProps(newProps) {
        this.setState({
            values: newProps.nguoiDungchitiet
        })
    }
    render() {
        let { MaSV, sdt, email, hoTen } = this.state.values
        return (
            <>
                <div className="col-12">
                    <h2 className='bg-dark text-white'>Form Đăng ký</h2>
                    <form onSubmit={this.handleonSubmit}>
                        <div className="row py-3">
                            <div className="col">
                                <label htmlFor="MaSV">Mã Sinh Viên</label>
                                <input onChange={this.handleOnChange} name="MaSV" type="text" className="form-control" placeholder="Nhập mã sinh viên" value={MaSV} />
                                <p className='text-danger'>{this.state.errors.MaSV}</p>
                            </div>
                            <div className="col p">
                                <label htmlFor="hoTen">Họ Tên</label>
                                <input name="hoTen" onChange={this.handleOnChange} type="text" className="form-control" placeholder="Nhập mã họ tên" value={hoTen} />
                                <p className='text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input name="email" onChange={this.handleOnChange} type="email" className="form-control" placeholder="Nhập email" typeform="email" value={email} />
                                <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                            <div className="col">
                                <label htmlFor="sdt">Số Điện Thoại</label>
                                <input name="sdt" onChange={this.handleOnChange} type="number" className="form-control" placeholder="Nhập số điện thoại" value={sdt} />
                                <p className='text-danger'>{this.state.errors.sdt}</p>
                            </div>
                        </div>
                        <div className="py-3">
                            <button className='btn btn-success mr-5'>Thêm</button>

                        </div>
                    </form>
                    <div className="row" >
                        <div className="col-9 form-group">
                            <input placeholder="Nhập tên sinh viên" name='tukhoa' type="text" className="form-control" id="txtSearch" onChange={this.handleOnChange1} />
                        </div>
                        <div className="col-3 form-group">
                            <button  onClick={this.handleonSearch} id="btnSearch" className="btn btn-primary">Search</button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungchitiet: rootReducer.QLND.nguoiDungchitiet,
    }
}
export default connect(mapStateToProps)(FormDangKy)