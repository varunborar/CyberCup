import React, { useState } from 'react'
import './RegForm.css'
import EventData from "../../Data/Events.json";
import Animation from '../Landing/Animation';

const RegForm = (props) => {
  const [teamname, setTeamname] = React.useState();
  const [event, setEvent] = useState("Design Sprint");
  const [members, setMembers] = useState(1);

  const [name, setName] = useState(Array(4).fill(''));
  const setNames = (i, v) => {
    setName(Object.assign([...name], { [i]: v }));
  };

  const [email, setEmail] = useState(Array(4).fill(''));
  const setEmails = (i, v) => {
    setEmail(Object.assign([...email], { [i]: v }))
  }

  const [number, setNumber] = useState(Array(4).fill(''));
  const setNumbers = (i, v) => {
    setNumber(Object.assign([...number], { [i]: v }))
  }

  const [college, setCollege] = useState(Array(4).fill(''));
  const setColleges = (i, v) => {
    setCollege(Object.assign([...college], { [i]: v }))
  }

  const [degree, setDegree] = useState(Array(4).fill(''));
  const setDegrees = (i, v) => {
    setDegree(Object.assign([...degree], { [i]: v }))
  }

  const [branch, setBranch] = useState(Array(4).fill(''));
  const setBranches = (i, v) => {
    setBranch(Object.assign([...branch], { [i]: v }))
  }

  const [state, setState] = useState(Array(4).fill(''));
  const setStates = (i, v) => {
    setState(Object.assign([...state], { [i]: v }))
  }


  let team = {
    TeamName: teamname,
    Event: event,
    Members: members,
    Names: name,
    Email: email,
    Number: number,
    College: college,
    Degree: degree,
    Branch: branch,
    State: state
  }

  const teamMemebers = () => {
    const row = [];
    for (let i = 0; i < members; i++) {
      row.push(
        <fieldset>
          <br/>
          <br/>
          
          <label className="form-label gx-5" id='headingteammem' for="form3Example1q">Enter Details of Member {i + 1} </label>
          <div className="row rowforflname" >

            <div className="col-md-6 mb-4">

              <div className="form-outline">
                <label className="form-label" for="name"> Name:</label>
                <input type="text" id="lastName" className="form-control page form-control-lg" required onChange={e => setNames(i, e.target.value)} />

              </div>

            </div>

            <div className="col-md-6 mb-4">

              <div className="form-outline">
                <label className="form-label" for="mobile">Mobile Number: </label>
                <input type="text" className="form-control page form-control-lg" id="mobile" onChange={e => setNumbers(i, e.target.value)} required />

              </div>

            </div>

          </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="email">Email: </label>
                <input type="text" id="email" onChange={e => setEmails(i, e.target.value)} required className="form-control page form-control-lg" />


          </div>


          <div className="form-outline mb-4">
            <label className="form-label" for="college">College:</label>
            <input type="text" id="college" onChange={e => setColleges(i, e.target.value)} required className="form-control page" />
          </div>


          <div className="row rowfordegbran" >
            <div className="col-md-6 mb-4">

              <div className="form-outline">
                <label className="form-label" for="degree">Degree:</label>
                <input type="text" id="degree" onChange={e => setDegrees(i, e.target.value)} required className="form-control page form-control-lg" />

              </div>

            </div>
            <div className="col-md-6 mb-4">

              <div className="form-outline">
                <label className="form-label" for="branch">Branch:</label>
                <input type="text" id="branch" onChange={e => setBranches(i, e.target.value)} required className="form-control page form-control-lg" />

              </div>

            </div>
            {/* <div className="col-md-6 mb-4"> */}

            <div className="form-outline mb-4">
                <label className="form-label" for="state">State: </label>
                <input type="text" id="state" onChange={e => setStates(i, e.target.value)} required className="form-control page form-control-lg" />

              {/* </div> */}

            </div>
          </div>
          
        </fieldset>
      )
    }
    return row;
  };

  const Increment = () => {
    if (members < 4) {
      setMembers(members + 1);
    }
  }

  const Decrement = () => {
    if (members > 1) {
      setMembers(members - 1);
    }
  }

  const checkAndSubmit = (event) => {
    // to validate all the given entries
  }

  const ubmit = () => {
    console.log(team);
  }

  return (

    <section className="page h-100 h-custom maincontainer" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 ">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                <form className="px-md-2">

                  <div className="form-outline mb-4" id='page2'>
                    <label className="form-label" for="form3Example1q">Team Name</label>
                    <input type="text" id="form3Example1q" className="page form-control" onChange={(event) => {
                      setTeamname(event.target.value)
                    }} required />

                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">

                      <label className="form-label gx-3" for="form3Example1q">Select Event</label>
                      <select className="page select" id="event-drop" name="events" required onChange={e => setEvent(e.target.value)}>
                        {
                          EventData.map((Event) => {
                            return (
                              <option id='options' key={Event._id} value={Event.name}>{Event.name}</option>

                            )
                          })
                        }
                      </select>

                    </div>
                    <div className="col-md-6 mb-4">

                      <label className="form-label gx-5" for="form3Example1q">Select number of Members: </label>
                      <input type='text' id='num-of-members' name="num-of-members" placeholder={members} disabled="disabled" required></input>
                      <button className='page' id = "icbutton" onClick={Increment}>+</button>
                      <button className='page' id = "dcbutton"onClick={Decrement}>-</button>

                    </div>
                  </div>

                  {teamMemebers()}

                  <input type="submit" onClick={ubmit()} className="btn btn-success page btn-lg mb-1" value='Submit'></input>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Animation/>
    </section>

  )
}

export default RegForm