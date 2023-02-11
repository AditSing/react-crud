import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const navigate = useNavigate()

    const saveUser = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="columns">
            <div className="column is-half">
                <form onSubmit={saveUser}>
                    <div className="field">
                        <label clasName="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label clasName="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label clasName="label">Gender</label>
                        <div className="control">
                            <div className="select is-fulwidth">
                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Male" selected={gender == "Male" ? "selected" : ''}>Male</option>
                                    <option value="Female" selected={gender == "Female" ? "selected" : ''}>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser