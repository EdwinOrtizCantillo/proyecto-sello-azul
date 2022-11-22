import React from 'react';
import './contacto.css';
export default class contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: false,
            contact: '',
            email: '',
            emailError: false,
            emailError2: false,
            message: '',
            messageError: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    // isValidcontact(contactno) {
    //   return /^[6-9]\d{9}$/.test(contactno);
    // }  

    handleBlur(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });

        // eslint-disable-next-line eqeqeq
        if (value.length <= 0 && (name == 'name')) {
            this.setState({ nameError: true });
        } else {
            this.setState({ nameError: false });
        }

        // eslint-disable-next-line eqeqeq
        if (value.length <= 0 && (name == 'email')) {
            this.setState({ emailError: true });
            this.setState({ emailError2: false });
        } else {
            this.setState({ emailError: false });
            if (this.isValidEmail(value)) {
                this.setState({ emailError2: false });
            } else {
                this.setState({ emailError2: true });
            }
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;

        this.setState({ nameError: name ? false : true });
        this.setState({ messageError: message ? false : true });
        this.setState({ emailError: email ? false : true });
        if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }


        if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
            this.setState({ formValid: true });
        } else {
            this.setState({ formValid: false });
        }

        e.preventDefault();
    }

    render() {

        const { nameError, emailError, emailError2, messageError, formValid } = this.state;

        if (!formValid) {

            return (
                <>
                    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                        <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
                        <div className="card-body">
                            <h3>Dejanos  tus comentario o  tus datos  y nos comunicaremos contigo</h3>
                            <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off" style={{ marginTop: 50 }}>
                                <div className="form-group">
                                    <label className="mb-0">Tu nombre<span className="text-danger">*</span></label>
                                    <input name="name" type="text" className="form-control" placeholder="Nombre" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
                                    {nameError
                                        ? <div className="alert alert-danger mt-2">El nombre en el campo es obligatorio.</div>
                                        : ''
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Tu correo electrónico<span className="text-danger">*</span></label>
                                    <input name="email" type="email" className="form-control" placeholder="Correo" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} />
                                    {emailError
                                        ? <div className="alert alert-danger mt-2">El correo en el campo es obligatorio.</div>
                                        : ''
                                    }
                                    {emailError2
                                        ? <div className="alert alert-danger mt-2">Correo invalido.</div>
                                        : ''
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Su número de contacto ( Opcional )</label>
                                    <input name="contact" type="text" className="form-control" placeholder="Contacto" onChange={this.handleChange} value={this.state.contact} />
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Mensaje<span className="text-danger">*</span></label>
                                    <textarea name="message" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur}  />
                                    {messageError
                                        ? <div className="alert alert-danger mt-2"> El mensaje en el campo es obligatorio.</div>
                                        : ''
                                    }
                                </div>
                                <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Enviar Ahora" /></p>
                            </form>

                        </div>
                    </div>
                    <p className="text-center"><a href="https://codematra.com/how-to-create-a-contact-form-in-react-js-using-bootstrap-with-validation/">Learn To Create Contact Form</a></p>
                </>
            );
        } else {
            return (
                <div className="thankyou_details" style={{ marginTop: 300 }}>
                    <div className="alert alert-success mt-3">Mail sent successfully.</div>
                </div>
            )
        }
    }
}
