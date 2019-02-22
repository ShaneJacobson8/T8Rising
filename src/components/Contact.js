import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            EmailAddress: '',
            Message: ''
        }
        
    }
    render() {
        return (
            <div>
                <br />
                <h2>Contact Us Form</h2>
                <br />
                <p>
                    Fill out the form below and we will get back to you as soon as we can.
        </p>
                <br />
                <br />
                <br />
                {/* contact form */}
                <form onSubmit={this.handleSubmit}>
                    <h7>Name</h7>
                    <section className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="First name"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                            />
                            </div>
                        <div className="col">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Last name"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                            />
                        </div>
                    </section>
                    <br />
                    <section className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input
                            type="email"
                            name="emailAddress"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            onChange={this.handleChange}
                            value={this.state.emailAddress}
                        />
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                What can we do for you?
            </label>
                            <textarea
                                className="form-control"
                                name="message"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                onChange={this.handleChange}
                                value={this.state.message}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
          </button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </section>
        </form>
                <br />
                <br />
                <br />
            </div>
        )
    }
}
export default Contact;

