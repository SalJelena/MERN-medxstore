import React, {useState} from 'react'
import {useSelector} from "react-redux";
import AccountDetails from "./AccountDetails";
import AccountDetailsEdit from "./AccountDetailsEdit";
import {ToastContainer} from "react-toastify";

const MyAccount = () => {
    const [editVisible, setEditVisible] = useState(false)

    const {user} = useSelector(state => state.usersStore)

    const handleEditVisibility = () => {
        !editVisible ? setEditVisible(true) : setEditVisible(false)
    }

    return (
        <>
            <div className="user__details">
                <h2 className="user__details-title">User Details</h2>
                {
                    !editVisible ?
                        <AccountDetails user={user}/>
                        :
                        <AccountDetailsEdit user={user} onSave={handleEditVisibility}/>
                }
                <button className="button button--primary user__details-btn" onClick={handleEditVisibility}>
                    {!editVisible ? "Edit" : "Back"}
                </button>
            </div>
            <ToastContainer/>
        </>
    )
}
export default MyAccount
