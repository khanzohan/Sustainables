import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    } catch (error) {
        console.log(error);
    }
}

handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
}

render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
        <div className='sign-up'>
            <h2 className='title'>CREATE A NEW ACCOUNT</h2>
            <span>I don't have an account</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text' 
                    className='form-input' 
                    name='displayName' 
                    value={displayName} 
                    handleChange={this.handleChange} 
                    label='Display Name' 
                    required
                />
                <FormInput 
                    type='text' 
                    className='form-input' 
                    name='email' 
                    value={email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password' 
                    className='form-input' 
                    name='password' 
                    value={password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required
                />
                <FormInput 
                    type='password' 
                    className='form-input' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}}

export default SignUp;