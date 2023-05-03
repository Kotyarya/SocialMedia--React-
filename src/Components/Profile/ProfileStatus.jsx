import React, {useState} from "react";

const ProfileStatus = (props) => {


    const [editMode, toggleEditMode] = useState(false)
    const [status, updateStateStatus] = useState(props.status)

    const onUpdateStatus = (e) => {
      let text = e.target.value
      updateStateStatus(text)
      props.updateStatus(text)
    }

  return (
      <div>
        {!editMode
            ? <div>
              <span onClick={() => toggleEditMode(true)}>{
                  props.status === null
                  ? "No status"
                  : props.status
              }</span>
            </div>
            : <div>
                <input onChange={onUpdateStatus} autoFocus={true} onBlur={() => toggleEditMode(false)} type="text" value={status}/>
            </div>
        }
      </div>
  )
}

export default ProfileStatus