import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { storePosts } from '../../actions/Posts'
import Swal from 'sweetalert2'

const Create = (props) => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = () => {
    props.storePosts({
      userId: 1,
      title: title,
      body: body
    })

    Swal.fire({
      title: 'Success!',
      text: `You have posted ${title}`,
      icon: 'success',
      confirmButtonText: 'Cool'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div id="blog" className="px-8 xl:px-0 py-12">
        <div className="text-left mx-auto container">
            <div className="w-3/4 mx-auto bg-gray-100 p-10">
              <h1 className="text-left text-xl lg:text-3xl text-gray-900 pb-6">
                Create Posts
              </h1>
              <table width="80%">
                <tbody>
                  <tr>
                    <td width="200px">Title</td>
                    <td className="font-semibold">
                      <input
                        type="text"
                        name="title"
                        placeholder="Your post title"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
                        onChange={e => setTitle(e.target.value)}
                        value={title}/>
                    </td>
                  </tr>
                  <tr>
                    <td width="200px">Content</td>
                    <td className="font-semibold">
                      <textarea
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-10 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          rows="4"
                          placeholder="Your post body"
                          onChange={e => setBody(e.target.value)}
                          value={body}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td width="200px">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => addNewPost()}>
                        Save
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storePosts }, dispatch)
}

export default connect(null, mapDispatchToProps)(Create)
