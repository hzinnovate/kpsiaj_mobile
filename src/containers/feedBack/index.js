import React, { Component } from 'react';
import { FeedBackComponent } from '../../components';
import { connect } from 'react-redux';
import { sendFeedBack, setToast } from '../../store/actions';
import { Loader, isValidEmail } from '../../shared';

let initialState = {
    fullName: "",
    fatherName: "",
    email: "",
    feedbackText: "",
    phoneNumber: "",
    departmentsForFeedBack: null,
    departmentsForFeedBackText: "",
}

class FeedBackContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.setFreshState()
    }
    componentWillUnmount() {
        this.setFreshState()
    }
    onInputChange(type, txt) {
        //fullName, fatherName, email, feedbackText, departmentsForFeedBack, departmentsForFeedBackText, phoneNumber
        this.setState({ [type]: txt })
    }
    onSubmit() {
        const { sendFeedBack, setToast } = this.props;
        const { fullName, fatherName, email, feedbackText, departmentsForFeedBack, departmentsForFeedBackText, phoneNumber } = this.state;
        try {
            if (email !== "" && !isValidEmail(email)) {
                setToast("error", "Email format is not correct")
                return;
            }
            if (departmentsForFeedBack === null) {
                console.log('error')
                setToast("error", "Please select the category for which feedback is being sent.")
                return;
            }
            if (departmentsForFeedBack === 'Other' && departmentsForFeedBackText === '') {
                setToast("error", 'Please specify the department / category for which you want to share your feedback.')
                return;
            }
            if (feedbackText.length < 15) {
                setToast("error", 'Feedback text too short.')
                return;
            }
            let obj = {
                fullName,
                fatherName,
                email,
                feedbackText,
                departmentsForFeedBack: departmentsForFeedBack === 'Other' ? departmentsForFeedBackText : departmentsForFeedBack,
                phoneNumber,
                uid: ''
            }
            sendFeedBack(obj, this.setFreshState.bind(this))
        } catch (error) {
            console.log(error)
        }
    }

    setFreshState() {
        this.setState(initialState)
    }
    render() {
        const { fullName, fatherName, email, feedbackText, departmentsForFeedBack, departmentsForFeedBackText, phoneNumber } = this.state;
        const { sendFeedBack, isLoading, feedBackCatogeries } = this.props;
        return (
            <>
                {isLoading && <Loader />}
                <FeedBackComponent
                    onSubmit={this.onSubmit.bind(this)}
                    onInputChange={this.onInputChange.bind(this)}
                    fullName={fullName}
                    fatherName={fatherName}
                    email={email}
                    feedbackText={feedbackText}
                    departmentsForFeedBack={departmentsForFeedBack}
                    departmentsForFeedBackText={departmentsForFeedBackText}
                    phoneNumber={phoneNumber}
                    feedBackCatogeries={feedBackCatogeries}
                />
            </>
        )
    }
}

const mapStateToProps = ({ feedback }) => {
    return {
        isLoading: feedback.isLoading,
        feedBackCatogeries: feedback.feedBackCatogeries
    }
}
export default connect(mapStateToProps, { sendFeedBack, setToast })(FeedBackContainer)
