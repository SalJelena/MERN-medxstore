import React from 'react'

const AccountDetails = ({user}) => {
    return (
        <div className="user__details-data">
            <div className="user__details-wrap">
                <span className="user__details-label">First Name</span>
                <p className="user__details-text">
                    {user.firstName}
                </p>
            </div>

            <div className="user__details-wrap">
                <span className="user__details-label">Last Name</span>
                <p className="user__details-text">
                    {user.lastName}
                </p>
            </div>

            <div className="user__details-wrap">
                <span className="user__details-label">Email</span>
                <p className="user__details-text">
                    {user.email}
                </p>
            </div>


            <div className="user__details-wrap">
                <span className="user__details-label">Address</span>
                <p className="user__details-text">
                    {user.address ?
                        user.address : ""
                    }
                </p>
            </div>

            <div className="user__details-wrap">
                <span className="user__details-label">City</span>
                <p className="user__details-text">
                    {user.city ?
                        user.city : ""
                    }
                </p>
            </div>

            <div className="user__details-wrap">
                <span className="user__details-label">Postcode</span>
                <p className="user__details-text">
                    {user.postCode ?
                        user.postCode : ""
                    }
                </p>
            </div>

            <div className="user__details-wrap">
                <span className="user__details-label">Phone</span>
                <p className="user__details-text">
                    {user.phone ?
                        user.phone : ""
                    }
                </p>
            </div>
        </div>
    )
}
export default AccountDetails
