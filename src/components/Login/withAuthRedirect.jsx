import React from 'react'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return (
                <Component  {...this.props}/>
        )
        }
    }
    let mapStateToRedirect = (state) => {
        return {
            isAuth: state.postPage.isAuth
        }
    }

    let connectedwithAuthRedirect = connect (mapStateToRedirect) (RedirectComponent)

    return connectedwithAuthRedirect
}
export default withAuthRedirect