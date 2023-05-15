import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {
    state = {
        value: {
            id: 1,
            userName: '',
            phone: '',
            email: '',
        },
        error: {
            id: '',
            userName: '',
            phone: '',
            email: '',
        },
    };

    handleOnChange = (event) => {
        const {id, name, className, value} = event.target;
        console.log({id, name, className, value});
        // console.log(event.target.value);

        const newValue = {...this.state.value};

        newValue[id] = value;

        // Copy
        const newError = {...this.state.error};

        let messError = ''
        if (value === '') {
            messError = name + ' không được bỏ trống'
        }

        if (id === 'email') {
			const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

			if (regexEmail.test(value) === false) {
				// !regexEmail.test(value);

				messError = 'Email Không Hợp Lệ.';
			}
		}

        newError[id] = messError;

        this.setState(
            {
                value: newValue,
                error: newError,
            },
            () => {
                console.log(this.state);
            }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();

        for (let keyValue in this.state.value) {
			if (this.state.value[keyValue] === '') {
				alert('Bạn Chưa Nhập Dữ Liệu.');

				// Dừng chạy và thoát khỏi hàm
				return;
			}
		}

        for (let keyError in this.state.error) {
			if (this.state.error[keyError] !== '') {
				alert(this.state.error[keyError])
				
				// Dừng chạy và thoát khỏi hàm
				return;
			}
		}

        const action = {
			type: 'THEM_NGUOI_DUNG',
			payload: this.state.value,
		};

		this.props.dispatch(action);
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
            <h1 className="card-header text-center bg-dark text-white">Form Đăng Ký</h1>
            <div className="row">
                <div className='col-6 mt-3' style={{padding: '1rem 2rem'}}>
                        <label htmlFor="" className="form-label">Mã SV</label>
                        <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter ID'
                            id='id'
                            name='id'
                            onChange={this.handleOnChange}
                        />
                        <p className='text-danger'>{this.state.error.id}</p>
                    </div>
                    <div className='col-6 mt-3' style={{padding: '1rem 2rem'}}>
                        <label htmlFor="" className="form-label">Họ tên</label>
                        <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter User Name'
                            id='userName'
                            name='userName'
                            onChange={this.handleOnChange}
                        />
                        <p className='text-danger'>{this.state.error.userName}</p>

                    </div>
                    <div className='col-6 mt-3' style={{padding: '1rem 2rem'}}>
                        <label htmlFor="" className="form-label">SĐT:</label>
                        <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter phone'
                            id='phone'
                            name='phone'
                            onChange={this.handleOnChange}
                        />
                        <p className='text-danger'>{this.state.error.phone}</p>

                    </div>
                    <div className='col-6 mt-3' style={{padding: '1rem 2rem'}}>
                            <label htmlFor="" className="form-label">Email:</label>
                            <input 
                                type="text" 
                                className='form-control'
                                placeholder='Enter email'
                                id='email'
                                name='email'
                            onChange={this.handleOnChange}
                            />
                        <p className='text-danger'>{this.state.error.email}</p>

                    </div>
            </div>
            <button className='btn btn-success m-4' style={{
                width: 400,
            }}>Thêm sinh viên</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (rootReducer) => {
	return {
		nguoiDungSua: rootReducer.reactFormReducer.nguoiDungSua,
	};
};

export default connect(mapStateToProps)(FormDangKy);
