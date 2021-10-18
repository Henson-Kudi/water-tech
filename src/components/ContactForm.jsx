import React, {useState, useRef} from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL as axios} from './axios'
import './ContactForm.css'

function ContactForm({contactStyles, handleCancel, message, setMessage}) {
    const [contactDetails, setContactDetails] = useState({})
    const formRef = useRef();

    const handleChange = (e)=>{
        const {name, value}  = e.target
        setContactDetails(prev => (
            {
                ...prev,
                [name] : value,
            }
        ))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (contactDetails.name) {
            if (contactDetails.email) {
                if (contactDetails.tel) {
                    if (contactDetails.message) {
                        emailjs.sendForm('service_ypi7l5l', 'template_lplb987', formRef.current, 'user_LhB6BmKHXG6o83l1skINd')
                        .then((result) => {
                            toast('Message received. We\'ll contact you soon.')
                        }, (error) => {
                            console.log(error.text);
                        });
                        e.target.reset()
                        setContactDetails({})
                        setTimeout(() => {
                            handleCancel()
                        }, 5000)
                    }else{
                        alert('Please fill all fields')
                    }
                }else{
                    alert('Please fill all fields')
                }
            }else{
                alert('Please fill all fields')
            }
        }else{
            alert('Please fill all fields')
        }
    }



    return (
        <div className="Contact" style={contactStyles}>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="formContainer">
                    <h3>Contact Form</h3>
                    <div className="formElement">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id='name' value={contactDetails.name} onChange={handleChange} placeholder="Name" />
                    </div>

                    <div className="formElement">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id='email' value={contactDetails.email} onChange={handleChange} placeholder="Email" />
                    </div>

                    <div className="formElement">
                        <label htmlFor="tel">Telephone</label>
                        <input type="text" name="tel" id='tel' value={contactDetails.tel} onChange={handleChange} placeholder="Mobile Number" />
                    </div>

                    <div className="formElement">
                        <textarea type="text" name="message" id='message' value={contactDetails.message} onChange={handleChange} placeholder="Message" />
                    </div>

                    <div className="submitOptions">
                        <button type='button' className="btn btnCancel" onClick={handleCancel}>Cancel</button>
                        <button type='submit' className="btn btnSubmit">Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default ContactForm
