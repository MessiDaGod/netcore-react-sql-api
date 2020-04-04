import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
    eye: {
        cursor: 'pointer',
    },
});

class UsernameInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };
    }
    render() {
        return (
            <TextField
                {...this.props} //this allows for the placeholder "username" in the input field
            />
        );
    }
}

UsernameInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
};

UsernameInput = withStyles(styles)(UsernameInput);

class PasswordInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordIsMasked: true,
        };
    }

    togglePasswordMask = () => {
        this.setState(prevState => ({
            passwordIsMasked: !prevState.passwordIsMasked,
        }));
    };

    render() {
        const { classes } = this.props;
        const { passwordIsMasked } = this.state;

        return (
            <TextField
                type={passwordIsMasked ? 'password' : 'text'}
                {...this.props}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <RemoveRedEye
                                className={classes.eye}
                                onClick={this.togglePasswordMask}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
};

PasswordInput = withStyles(styles)(PasswordInput);

/* --------------------------------------------------------- */

class PasswordInput2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            username: '',
        };
    }

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { password } = this.state;
        const { username } = this.state;

        return (
            <React.Fragment>
                <UsernameInput
                    placeholder="UserName"
                    name="username"
                    className=""
                    value={username}
                    onChange={this.onChange}
                />
                <PasswordInput
                    placeholder="Password"
                    name="password"
                    className=""
                    value={password}
                    onChange={this.onChange}
                />
            </React.Fragment>
        );
    }
}

export default PasswordInput2;