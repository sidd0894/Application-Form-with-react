import { useState } from 'react'

function App() {

  return (
    <>
      import {useState} from 'react'

      function App() {
  const [fName, setFName] = useState('')
      const [lName, setLName] = useState('')
      const [email, setEmail] = useState('')
      const [contact, setContact] = useState('')
      const [gender, setGender] = useState('')
      const [subject, setSubject] = useState('')
      const [file, setFile] = useState('')
      const [url, setUrl] = useState('')
      const [option, setOption] = useState('answer0')
      const [about, setAbout] = useState('')

  const handleSubjectChange = sub => {
        setSubject(sub)
      }

  const handleFormSubmit = () => {
        let response = {
        Firstname: fName,
      Lastname: lName,
      Email: email,
      Contact: contact,
      Gender: gender,
      Subject: subject,
      File: file,
      URL: url,
      Option: option,
      About: about
    }
      console.log(response)
      alert('Form Submitted.')
    // Handle the response here (like sending the response to server).
  }

  const handleFormReset = () => {
        setFName('')
    setLName('')
      setEmail('')
      setContact('')
      setGender(false)
      setSubject(false)
      setFile('')
      setUrl('')
      setOption('answer0')
      setAbout('')
  }

      return (
      <>
        <div className="border border-black m-4 mx-auto w-11/12 sm:w-4/6 lg:w-3/6 xl:w-5/12 2xl:w-4/12 rounded bg-green-300 shadow-2xl shadow-gray-950">
          <header className="my-2 text-center text-2xl font-bold">Application Form</header>
          <div className="px-2 py-2 sm:px-5">

            <div className="my-2">
              <label htmlFor="firstNameInput" className="font-medium">First Name<span className="text-red-500 text-base">*</span></label>
              <br />
              <input
                type="text"
                name=""
                id="firstNameInput"
                placeholder="Enter First Name"
                className="h-8 w-full border border-solid border-gray-700 px-3 rounded"
                value={fName}
                onChange={e => { setFName(e.target.value) }}
                required />
            </div>

            <div className="my-2">
              <label htmlFor="lastNameInput" className="font-medium">Last Name<span className="text-red-500 text-base">*</span></label>
              <br />
              <input
                type="text"
                name=""
                id="lastNameInput"
                placeholder="Enter Last Name"
                value={lName}
                onChange={e => setLName(e.target.value)}
                className="h-8 w-full border border-solid border-gray-700 px-3 rounded"
                required />
            </div>

            <div className="my-2">
              <label htmlFor="email" className="font-medium">Email<span className="text-red-500 text-base">*</span></label>
              <br />
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-8 w-full border border-solid border-gray-700 px-3 rounded"
                required />
            </div>

            <div className="my-2">
              <label htmlFor="contact" className="font-medium">Contact<span className="text-red-500 text-base">*</span></label>
              <br />
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                name=""
                id="contact"
                placeholder="Enter mobile number"
                value={contact}
                onChange={e => setContact(e.target.value)}
                className="h-8 w-full border border-solid border-gray-700 px-3 rounded"
                required />
            </div>

            <div className="my-2">
              <div className="font-medium">Gender<span className="text-red-500 text-base">*</span></div>
              <div className="flex justify-evenly">
                <label className="select-none">
                  <input
                    type="radio"
                    value="Male"
                    className="mx-1"
                    checked={gender === 'Male'}
                    onChange={e => setGender(e.target.value)}
                  />
                  Male
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    value="Female"
                    className="mx-1"
                    checked={gender === 'Female'}
                    onChange={e => setGender(e.target.value)}
                  />
                  Female
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    value="Others"
                    className="mx-1"
                    checked={gender === 'Others'}
                    onChange={e => setGender(e.target.value)}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="my-2">
              <div className="font-medium">Your best subject</div>
              <div className="flex justify-evenly">
                <label className="select-none">
                  <input
                    type="radio"
                    value="Maths"
                    className="mx-1"
                    checked={subject === 'Maths'}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                  />
                  Maths
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    value="Physics"
                    className="mx-1"
                    checked={subject === 'Physics'}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                  />
                  Physics
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    value="English"
                    className="mx-1"
                    checked={subject === 'English'}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                  />
                  English
                </label>
              </div>
            </div>

            <div className="my-2">
              <div className="font-medium">Upload resume<span className="text-red-500 text-base">*</span></div>
              <div className="flex w-full border border-solid border-gray-700 bg-slate-50 px-3 rounded py-1">
                <input
                  type="file"
                  name=""
                  id=""
                  value={file}
                  onChange={e => setFile(e.target.value)}
                  required />
              </div>
            </div>

            <div className="my-2">
              <label htmlFor="urlInput" className="font-medium">Enter URL<span className="text-red-500 text-base">*</span></label>
              <br />
              <input
                type="text"
                name=""
                id="firstNameInput"
                placeholder="https://example.com"
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="h-8 w-full border border-solid border-gray-700 px-3 rounded"
                required />
            </div>

            <div className="my-2">
              <div className="font-medium">Select your choice</div>
              <div>
                <select name="" className="px-3 rounded" value={option} onChange={e => setOption(e.target.value)} >
                  <option value="answer0">Select your answer</option>
                  <option value="answer1">Answer 1</option>
                  <option value="answer2">Answer 2</option>
                  <option value="answer3">Answer 3</option>
                  <option value="answer4">Answer 4</option>
                  <option value="answer5">Answer 5</option>
                </select>
              </div>
            </div>

            <div className="my-2">
              <div className="font-medium">About</div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                value={about}
                onChange={e => setAbout(e.target.value)}
                className="w-full px-3 py-1 resize-none rounded-sm"
                placeholder="Write about yourself..."></textarea>
            </div>

            <div className=" mt-10 font-medium flex items-center justify-center">Submit or Reset</div>

            <div className="my-2 flex justify-evenly">
              <button
                className="bg-blue-200 hover:bg-blue-300 border font-medium border-black px-8 py-2 shadow-gray-600 shadow-xl rounded"
                onClick={handleFormSubmit}
              >Submit</button>

              <button
                className="bg-blue-200 hover:bg-blue-300 border font-medium border-black px-8 py-2 shadow-gray-600 shadow-xl rounded"
                onClick={handleFormReset}
              >Reset</button>
            </div>
          </div>
        </div>

      </>
      )
}

      export default App

    </>
  )
}

export default App
