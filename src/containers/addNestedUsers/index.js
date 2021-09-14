import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddNestedUserComponent } from '../../components';
import { setToast, onCreateUserOnFirebase, onRemoveUser, onUpdateUser } from '../../store/actions';
import { Loader } from '../../shared';
let initialState = {
    fullName: "",
    fatherName: "",
    countryName: "",
    dateOfBirth: "",
    gender: "",
    isUpdate: false,
    // perFormUid: timeStamp,
    // mainUserInfo: this.props.userInfo,
}
class AddNestedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    setFreshState() {
        this.setState(initialState)
    }
    componentDidMount() {
        let { route, user } = this.props;
        if (route && route.params && route.params.isUpdate) {
            let { users } = user;
            let userForUpdate = users[route.params.isUpdate];
            this.setState({ ...userForUpdate, isUpdate: true })
        } else {
            this.setFreshState()
        }
    }
    componentWillUnmount() {
        this.setFreshState()
    }
    onInputChange(name, value) {
        if (name === "dateOfBirth") {
            let date = new Date(value).toLocaleDateString()
            this.setState({ [name]: date })
            return;
        }
        this.setState({ [name]: value })
    }
    onUpdate() {
        let { fullName, fatherName, countryName, dateOfBirth, gender } = this.state;
        let { route, user, setToast, onUpdateUser } = this.props;
        let { users } = user;
        let userForUpdate = users[route.params.isUpdate];
        let count = 0;
        if (fullName !== userForUpdate.fullName) {
            count = count + 1
        }
        if (fatherName !== userForUpdate.fatherName) {
            count = count + 1
        }
        if (countryName !== userForUpdate.countryName) {
            count = count + 1
        }
        if (dateOfBirth !== userForUpdate.dateOfBirth) {
            count = count + 1
        }
        if (gender !== userForUpdate.gender) {
            count = count + 1
        }
        if (!count) {
            setToast("error", "Please update something")
            return;
        }
        let obj = {
            fullName, fatherName, countryName, dateOfBirth, gender
        }

        onUpdateUser(obj, user.uid, userForUpdate.uid, this.goBack.bind(this))
    }
    onDeletUser() {
        let { route, user, onRemoveUser } = this.props;
        let { users } = user;
        let userForUpdate = users[route.params.isUpdate];
        let obj = {
            parentUid: user.uid,
            childUid: userForUpdate.uid
        }
        onRemoveUser(obj, this.goBack.bind(this))
    }
    onSubmit() {
        let { fullName, fatherName, countryName, dateOfBirth, gender, isUpdate } = this.state;
        let { user, onCreateUserOnFirebase } = this.props;
        if (!fullName) {
            return;
        }
        if (!fatherName) {
            return;
        }
        if (!countryName) {
            return;
        }
        if (!dateOfBirth) {
            return;
        }
        if (!gender) {
            return;
        }
        if (isUpdate) {
            this.onUpdate()
            return;
        }
        let obj = {
            fullName, fatherName, countryName, dateOfBirth, gender,
            mainUserInfo: {
                uid: user.uid,
                phoneNumber: user.phoneNumber
            },
            uid: ""
        }
        onCreateUserOnFirebase(obj, this.goBack.bind(this))
    }
    goBack() {
        this.props.navigation.goBack()
    }

    render() {
        const { isLoading, countryList } = this.props;
        const { fullName,
            fatherName,
            countryName,
            dateOfBirth,
            gender,
            isUpdate } = this.state;
        return (
            <>
                {isLoading && <Loader />}
                <AddNestedUserComponent
                    fullName={fullName}
                    fatherName={fatherName}
                    countryName={countryName}
                    dateOfBirth={dateOfBirth}
                    gender={gender}
                    countryList={countryList}
                    onInputChange={this.onInputChange.bind(this)}
                    onSubmit={this.onSubmit.bind(this)}
                    onDeletUser={this.onDeletUser.bind(this)}
                    goBack={this.goBack.bind(this)}
                    isUpdate={isUpdate}
                />
            </>
        )
    }
}

const mapStateToProps = (props) => {
    const { auth, telethon } = props;
    return {
        user: auth.user,
        isLoading: auth.isLoading,
        countryList: telethon.countryList
    }
}
export default connect(mapStateToProps, { setToast, onCreateUserOnFirebase, onRemoveUser, onUpdateUser })(AddNestedUsers)
