import React, { Component } from 'react';
import { TelethonComponent, AuthenticationComponent } from '../../components';
import { connect } from 'react-redux';
import { Loader } from '../../shared';

class TelethonContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let { isUserLogin, isLoadingForAuth } = this.props;
        if (isUserLogin) {
            return (
                <>
                    {false && <Loader />}
                    <TelethonComponent />
                </>
            )
        } else {
            return (
                <>
                    {isLoadingForAuth && <Loader />}
                    <AuthenticationComponent />
                </>
            )
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoadingForAuth: auth.isLoading,
        isUserLogin: auth.isUserLogin
    }
}
export default connect(mapStateToProps)(TelethonContainer)
