import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getSelectedPost, getPostComments, storeComments } from '../../actions/Posts'
import { getSelectedUser } from '../../actions/Users'

const Posts = (props) => {
  const params = useParams()
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    props.getSelectedPost(params.postId)
    props.getSelectedUser(props.post_data.userId)
    props.getPostComments(params.postId)
  }, [])

  const addComments = () => {
    props.storeComments(params.postId, {
      name: "Anonymous",
      email: "anon@nym.ous",
      body: commentText
    })
    setCommentText('')
  }

  return (
    <div id="blog" className="px-8 xl:px-0 py-12">
        <div className="mx-auto container">
            <h1 className="text-center text-2xl lg:text-6xl text-gray-900">{ props.post_data.title }</h1>
            <div className="w-3/4 mx-auto mt-4 lg:mt-10">
              <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
              <div className="w-full flex justify-between items-end mt-6">
                <Link
                  className="text-lg font-semibold text-indigo-700"
                  to={ `/authors/${props.post_data.userId}` }>
                  { props.user_data ? props.user_data.name : '' }
                </Link>
                <span className="text-md text-gray-400">13th Oct, 2020</span>
              </div>

              <p className="text-left mt-6 text-lg">
                { props.post_data.body }
              </p>

              <br/><hr/><br/>
              <h2 className="text-left text-xl lg:text-2xl text-gray-900">Comments</h2>

              {
                props.post_comments.map((val, index) => {
                  return <div className="mt-4 bg-gray-100 p-4 rounded" key={index}>
                    <h3 className="text-left text-md lg:text-md text-gray-600 font-bold">
                      { val.name } <small>({ val.email })</small>
                    </h3>
                    <p className="text-left">
                      { val.body }
                    </p>
                  </div>
                })
              }

              <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-10 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  rows="4"
                  placeholder="Your comments"
                  onChange={e => setCommentText(e.target.value)}
                  value={commentText}
              ></textarea>

              <div className="w-full flex justify-start mt-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addComments()}>
                  Send Comments
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  post_data: state.PostsReducer.post_data,
  post_comments: state.PostsReducer.post_comments,
  user_data: state.UsersReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSelectedPost, getPostComments, getSelectedUser, storeComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
