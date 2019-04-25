import React from 'react';
import MyFieldComponent from './11a.jsx';
import MyTextAreaComponent from './11b.jsx';

let emailRegex = /^\w+@[a-zA-Z]+(\.[a-zA-Z]{2,3}){1,2}$/;
let phoneNumberRegex = /^(\d{9})$|^(\+\d{11})$/;
let complaintRegex = /.+/;
let emailBool = false;
let phoneNumberBool = false;
let complaintBool = false;

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phoneNumber: "",
            complaint: "",
            emailValidityMessage: "",
            phoneNumberValidityMessage: "",
            complaintValidityMessage: "",
            emailColor: "",
            phoneNumberColor: "",
            complaintColor: "",
            pageValidity: ""
        }
    }
    handlePageValidity() {
        if (emailBool && phoneNumberBool && complaintBool)
            this.setState({pageValidity: "Everything is OK" });
        else
            this.setState({pageValidity: "Oops, something is invalid or unfilled yet"})
    }

    emailHandleChange(event) {
        let value = event.target.value;
        this.setState({ email: value });
        if (!emailRegex.test(value)) {
            emailBool = false
            if (value == "")
                this.setState({
                    emailValidityMessage: "Please enter email",
                    emailColor: "red"
                });
            else
                this.setState({
                    emailValidityMessage: "Invalid email",
                    emailColor: "red"
                });
        }
        else {
            emailBool = true;
            this.setState({
                emailValidityMessage: "OK",
                emailColor: "#1aff1a"
            });
        }
        this.handlePageValidity();

    }
    phoneNumberHandleChange(event) {
        let value = event.target.value;
        this.setState({ phoneNumber: value });
        if (!phoneNumberRegex.test(value)) {
            phoneNumberBool = false;
            if (value == "")
                this.setState({
                    phoneNumberValidityMessage: "Please enter phone number",
                    phoneNumberColor: "red"
                });
            else
                this.setState({
                    phoneNumberValidityMessage: "Invalid phone number",
                    phoneNumberColor: "red"
                });
        }
        else {
            phoneNumberBool = true;    
            this.setState({
                phoneNumberValidityMessage: "OK",
                phoneNumberColor: "#1aff1a"
            });
        }
        this.handlePageValidity();
    }
    complaintHandleChange(event) {
        this.setState({ complaint: event.target.value });
        if (!complaintRegex.test(event.target.value)){
            complaintBool = false;
            this.setState({
                complaintValidityMessage: "Please enter your complaint",
                complaintColor: "red"
            });
        }
        else{
            complaintBool = true;
            this.setState({
                complaintValidityMessage: "OK",
                complaintColor: "#1aff1a"
            });
        }
            this.handlePageValidity();
    }
    render() {
        return <div>
            <form>
                <MyFieldComponent
                    label="E-mail"
                    value={this.state.email}
                    onChange={this.emailHandleChange.bind(this)}
                    validityMessage={this.state.emailValidityMessage}
                    color={this.state.emailColor}
                />
                <MyFieldComponent
                    label="Phone number"
                    value={this.state.phoneNumber}
                    onChange={this.phoneNumberHandleChange.bind(this)}
                    validityMessage={this.state.phoneNumberValidityMessage}
                    color={this.state.phoneNumberColor}
                />
                <MyTextAreaComponent
                    value={this.state.complaint}
                    onChange={this.complaintHandleChange.bind(this)}
                    validityMessage={this.state.complaintValidityMessage}
                    color={this.state.complaintColor}
                />
                
                <span 
                style={{textAlign: "center", fontSize: "19px", marginTop: "10px"}}>{this.state.pageValidity}</span>
            </form>
        </div>
    }
}

export default MyForm;