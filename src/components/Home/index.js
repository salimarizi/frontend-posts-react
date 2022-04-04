import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions/Posts'
import { getUsers, getSelectedUserName } from '../../actions/Users'

const Home = (props) => {
  useEffect(() => {
    props.getPosts()
    props.getUsers()
  }, [])

  return (
    <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
            <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Latest from our Blog</h1>
            <div className="mt-12 lg:mt-24">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                      props.posts_data.map((val, index) => {
                        return <div key={index}>
                            <div className="mt-10">
                                <div>
                                    <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">
                                          { val.userId ? getSelectedUserName(props.users_data, val.userId) : '' }
                                        </p>
                                        <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                                          { val.title ? (val.title.slice(0, 15) + (val.title.length > 15 ? "..." : "")) : '' }
                                        </h1>
                                        <p className="text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                                          { val.body ? (val.body.slice(0, 30) + (val.body.length > 30 ? "..." : "")) : '' }
                                        </p>
                                        <div className="w-full flex justify-end">
                                          <Link
                                            className="text-indigo-500 font-bold py-2 px-4 rounded mt-2"
                                            to={ `/posts/${val.id}` }>
                                            Read More
                                          </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  posts_data: state.PostsReducer.posts_data,
  users_data: state.UsersReducer.users_data
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts, getUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
