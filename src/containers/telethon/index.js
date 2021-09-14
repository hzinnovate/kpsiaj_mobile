import React, { Component } from 'react';
import { TelethonComponent, AuthenticationComponent } from '../../components';
import { connect } from 'react-redux';
import { Loader, isValidEmail } from '../../shared';
import { setToast, sendTelethonPledge } from '../../store/actions';

let initialState = {
    fullName: "",
    fatherName: "",
    email: "",
    amount: "",
    dedicatedFor: "General",
    dedicatedForOtherText: "",
    currency: "PKR",
    countryName: "Pakistan",
    donationType: "Donation",

}
class TelethonContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    setFreshState() {
        this.setState(initialState)
    }
    componentDidMount() {
        this.setFreshState()
    }
    componentWillUnmount() {
        this.setFreshState()
    }
    onInputChange(type, txt) {
        this.setState({ [type]: txt })
    }
    onSubmit() {
        const { sendTelethonPledge, setToast, user } = this.props;
        const { fullName, fatherName, email, amount, dedicatedFor, dedicatedForOtherText, currency, countryName, donationType } = this.state;
        try {
            if (fullName === '' || fullName === " ") {
                setToast("error", 'Please specify Full Name')
                return;
            }
            if (fatherName === '' || fatherName === ' ') {
                setToast("error", 'Please specify Father / Husband Name')
                return;
            }
            if (email === "") {
                setToast("error", "Please specify Email Address")
                return;
            }
            if (email !== "" && !isValidEmail(email)) {
                setToast("error", "Email format is not correct")
                return;
            }
            if (!donationType) {
                setToast("error", "Please select type")
                return;
            }
            if (!dedicatedFor) {
                setToast("error", "Please select dedicated for")
                return;
            }
            if (dedicatedFor === 'Other' && dedicatedForOtherText === '') {
                setToast("error", 'Please fill Dedicated field')
                return;
            }
            if (!countryName) {
                setToast("error", "Please select country")
                return;
            }
            if (!currency) {
                setToast("error", "Please select currency")
                return;
            }
            if (amount === '' || amount === ' ' || amount === 0) {
                setToast("error", 'Please specify amount')
                return;
            }
            let obj = {
                fullName,
                fatherName,
                email,
                countryName,
                dedicatedFor: dedicatedFor === "Other" ? dedicatedForOtherText : dedicatedFor,
                amount,
                donationType,
                currency,
                phoneNumber: user.phoneNumber,
                mainUserUid: user.uid,
                uid: ""
            }
            sendTelethonPledge(obj)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const { isUserLogin, isLoadingForAuth, isLoadingForTelethon, countryList, dedicatedForValues, donationTypeValues, currencyValues } = this.props;
        const { fullName, fatherName, email, amount, dedicatedFor, dedicatedForOtherText, currency, countryName, donationType } = this.state;
        if (isUserLogin) {
            return (
                <>
                    {isLoadingForTelethon && <Loader />}
                    <TelethonComponent
                        onSubmit={this.onSubmit.bind(this)}
                        onInputChange={this.onInputChange.bind(this)}
                        fullName={fullName}
                        fatherName={fatherName}
                        email={email}
                        amount={amount}
                        dedicatedFor={dedicatedFor}
                        dedicatedForOtherText={dedicatedForOtherText}
                        currency={currency}
                        countryName={countryName}
                        donationType={donationType}
                        countryList={countryList}
                        dedicatedForValues={dedicatedForValues}
                        donationTypeValues={donationTypeValues}
                        currencyValues={currencyValues}
                    />
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
    const { auth, telethon } = props;
    return {
        user: auth.user,
        isLoadingForAuth: auth.isLoading,
        isUserLogin: auth.isUserLogin,
        isLoadingForTelethon: telethon.isLoading,
        countryList: telethon.countryList,
        dedicatedForValues: telethon.dedicatedForValues,
        donationTypeValues: telethon.donationTypeValues,
        currencyValues: telethon.currencyValues
    }
}
export default connect(mapStateToProps, { setToast, sendTelethonPledge })(TelethonContainer)
