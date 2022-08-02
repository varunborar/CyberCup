import React, { useState } from 'react'
import './RegForm.css'
import EventData from "../../Data/Events.json";
import Section from '../../Components/Section/Section';



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

          <label className="form-label gx-5" for="form3Example1q">Enter Details of Member {i + 1} </label>
          <div class="row rowforflname" >

            <div class="col-md-6 mb-4">

              <div class="form-outline">
                <label class="form-label" for="name"> Name:</label>
                <input type="text" id="lastName" class="form-control form-control-lg" onChange={e => setNames(i, e.target.value)} />

              </div>

            </div>

            <div class="col-md-6 mb-4">

              <div class="form-outline">
                <label class="form-label" for="mobile">Mobile Number: </label>
                <input type="text" id="mobile" onChange={e => setNumbers(i, e.target.value)} class="form-control form-control-lg" />

              </div>

            </div>

          </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="email">Email: </label>
                <input type="text" id="email" onChange={e => setEmails(i, e.target.value)} class="form-control form-control-lg" />


          </div>


          <div class="form-outline mb-4">
            <label className="form-label" for="college">College:</label>
            <input type="text" id="college" onChange={e => setColleges(i, e.target.value)} class="form-control" />
          </div>


          <div class="row rowfordegbran" >
            <div class="col-md-6 mb-4">

              <div class="form-outline">
                <label class="form-label" for="degree">Degree:</label>
                <input type="text" id="degree" onChange={e => setDegrees(i, e.target.value)} class="form-control form-control-lg" />

              </div>

            </div>
            <div class="col-md-6 mb-4">

              <div class="form-outline">
                <label class="form-label" for="branch">Branch:</label>
                <input type="text" id="branch" onChange={e => setBranches(i, e.target.value)} class="form-control form-control-lg" />

              </div>

            </div>
            {/* <div class="col-md-6 mb-4"> */}

            <div class="form-outline mb-4">
                <label class="form-label" for="state">State: </label>
                <input type="text" id="state" onChange={e => setStates(i, e.target.value)} class="form-control form-control-lg" />

              {/* </div> */}

            </div>
          </div>

          {/* <legend>Team Member {i + 1}:</legend>
            <label htmlFor="name">Name:</label><br/>
            <input type="text" id="name" name="name" placeholder='Eg: John Doe' onChange={e => setNames(i, e.target.value)}/><br/>

            <label htmlFor="email">Email ID:</label><br/>
            <input type="email" id="email" name="email" placeholder='example@email.id' onChange={e => setEmails(i, e.target.value)}/><br/>
            
            <label htmlFor="number">Mobile Number:</label><br/>
            <input type="number" id="phone-number" name="phone-number" placeholder='Eg: +91 9876543210' onChange={e => setNumbers(i, e.target.value)}/><br/>

            <label htmlFor="college">College:</label><br/>
            <input type="text" id="college" name="college" placeholder='Eg: Amity University' onChange={e => setColleges(i, e.target.value)}/><br/>

            <label htmlFor="degree">Degree:</label><br/>
            <input type="text" id="degree" name="degree" placeholder='Eg: B.Tech' onChange={e => setDegrees(i, e.target.value)}/><br/>

            <label htmlFor="branch">Branch:</label><br/>
            <input type="text" id="branch" name="branch" placeholder='Eg: CSE' onChange={e => setBranches(i, e.target.value)}/><br/>

            <label htmlFor="home">Home Town/State:</label><br/>
            <input type="text" id="home" name="home" placeholder='Eg: Delhi' onChange={e => setStates(i, e.target.value)}/><br/> */}

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

  // return (
  //   <Section className='page'>
  //     <form>

  //       <label htmlFor="team-name" className = ''>Enter the name of your Team: </label>
  //       <input type='text' placeholder='Team Name' required onChange={(event)=>{
  //                   setTeamname(event.target.value)
  //         }}></input>

  //       <label htmlFor="event">Choose the event you wish to register for: </label>
  //       <select id="event-drop" name="events" onChange={e => setEvent(e.target.value)}>

  //         {
  //           EventData.map((Event)=> {
  //             return (
  //               <option key={Event._id} value={Event.name}>{Event.name}</option>
  //             )
  //           })
  //         }

  //       </select>

  //       <label htmlFor="num-of-members">Enter the number of Team Members (Maximum 4):</label>

  //       <input type='text' id='num-of-members' name="num-of-members" placeholder={members} disabled="disabled" required></input>
  //       <button onClick={Increment}>+</button>
  //       <button onClick={Decrement}>-</button>

  //       {teamMemebers()}

  //       <input onClick={ubmit} type="submit" value="Submit"/>
  //       {/* <input onClick={(event)=>{checkAndSubmit(event)}} type="submit" value="Submit"/> */}
  //     </form>
  //   </Section>
  // )

  return (

    <section className="h-100 h-custom maincontainer" >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 ">
            <div class="card rounded-3">
              {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
                alt="Sample photo"> */}
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                <form class="px-md-2">

                  <div class="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">Team Name</label>
                    <input type="text" id="form3Example1q" class="form-control" onChange={(event) => {
                      setTeamname(event.target.value)
                    }} required />

                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">

                      <label className="form-label gx-5" for="form3Example1q">Select Event</label>
                      <select className="select" id="event-drop" name="events" onChange={e => setEvent(e.target.value)}>
                        {
                          EventData.map((Event) => {
                            return (
                              <option key={Event._id} value={Event.name}>{Event.name}</option>
                            )
                          })
                        }
                      </select>

                    </div>
                    <div class="col-md-6 mb-4">

                      <label className="form-label gx-5" for="form3Example1q">Select number of Members: </label>
                      <input type='text' id='num-of-members' name="num-of-members" placeholder={members} disabled="disabled" required></input>
                      <button onClick={Increment}>+</button>
                      <button onClick={Decrement}>-</button>

                    </div>
                  </div>

                  {teamMemebers()}

                  <input type="submit" onClick={ubmit()} class="btn btn-success btn-lg mb-1" value='Submit'></input>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default RegForm