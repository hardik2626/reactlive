import { cdata } from 'jquery'
import React, { useState } from 'react'

const Contact = () => {

    const formSubmit = () =>{
        const[cdata, setData] = useState({
            fullname: '',
            phone: '',
            email: '',
            msg: ''
        })

        const InputEvent = (event) =>{
            const {name, value} = event.target
            setData((preVal) => {
                return {
                    ...preVal,
                    [name] : value,
                }
            })
        }
    }

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group my-3">
                            <label for="exampleInputEmail1">Name </label>
                            <input type="text" name="fullname" value={cdata.fullname} onChange={InputEvent}  className="form-control" placeholder="Enter your Name" />
                        </div>
                        <div className="form-group my-3">
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="number" name="phone" value={cdata.phone} onChange={InputEvent}  className="form-control" placeholder="Enter your Mobile" />
                        </div>
                        <div className="form-group my-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" value={cdata.email} onChange={InputEvent}  className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group my-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea name="msg" value={cdata.msg} onChange={InputEvent}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
