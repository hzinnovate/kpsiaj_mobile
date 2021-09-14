import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QuizComponent, AuthenticationComponent } from '../../components';
import { setToast } from '../../store/actions';
import { Loader } from '../../shared';

class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // setFreshState() {
    //     this.setState(initialState)
    // }
    // componentDidMount() {
    //     this.setFreshState()
    // }
    // componentWillUnmount() {
    //     this.setFreshState()
    // }

    render() {
        const { isUserLogin, isLoadingForAuth, isLoadingForQuiz, user } = this.props;
        if (isUserLogin) {
            return (
                <>
                    {isLoadingForQuiz && <Loader />}
                    <QuizComponent user={user} />
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

const mapStateToProps = (props) => {
    const { auth, quiz } = props;
    return {
        user: auth.user,
        isLoadingForAuth: auth.isLoading,
        isUserLogin: auth.isUserLogin,
        isLoadingForQuiz: quiz.isLoading
    }
}
export default connect(mapStateToProps, { setToast })(QuizContainer)
