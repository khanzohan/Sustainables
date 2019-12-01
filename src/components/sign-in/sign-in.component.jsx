import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>SIGN IN TO YOUR ACCOUNT</h2>
                <span>I already have an account</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' label="email" className='form-input' value={this.state.email} name='email' handleChange={this.handleChange} required />
                    <FormInput type='password' label="password" className='form-input' value={this.state.password} name='password' handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooglSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;