import React from "react";

// const ProfileStatus = (props) => {
//
//
//     const [editMode, toggleEditMode] = useState(false)
//     const [status, updateStateStatus] = useState(props.status)
//
//     useEffect(() => {
//         updateStateStatus(props.status)
//         console.log("update")
//     },[status])
//
//     const onUpdateStatus = (e) => {
//       let text = e.target.value
//       updateStateStatus(text)
//       props.updateStatus(text)
//     }
//
//   return (
//      <div>
//         {!editMode
//             ? <div>
//               <span onClick={() => toggleEditMode(true)}>{
//                   props.status === null
//                   ? "No status"
//                   : props.status
//               }</span>
//             </div>
//             : <div>
//                 <input onChange={onUpdateStatus} autoFocus={true} onBlur={() => toggleEditMode(false)} type="text" value={status}/>
//             </div>
//         }
//      </div>
//   )
// }



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    onUpdateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    toggleEditMode = (condition) => {
        this.setState({
            editMode: condition
        })
        if (!condition) {
            this.props.updateStatus(this.state.status)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onClick={() => this.toggleEditMode(true)}>{
                             !this.props.status
                                ? "No status"
                                : this.props.status
                          }
                        </span>
                    </div>
                    : <div>
                        <input onChange={this.onUpdateStatus} autoFocus={true} onBlur={() => this.toggleEditMode(false)} type="text" value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus