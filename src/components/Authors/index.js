import React, { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getSelectedUser } from '../../actions/Users'
import { Wrapper, Status } from "@googlemaps/react-wrapper"

const Map = ({ center, zoom }: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef()

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
  })

  return <div ref={ref} id="map" />
}

const Authors = (props) => {
  const params = useParams()

  const zoom = 4
  let center = { lat: -34.397, lng: 150.644 }

  useEffect(() => {
    props.getSelectedUser(params.userId)
    center = { lat: props.user_data.address.geo.lat, lng: props.user_data.address.geo.lng }
  }, [])

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  }

  return (
    <div id="blog" className="px-8 xl:px-0 py-12">
        <div className="text-left mx-auto container">
            <div className="w-3/4 mx-auto bg-gray-100 p-10">
              <h1 className="text-left text-xl lg:text-3xl text-gray-900 pb-6">
                { props.user_data ? props.user_data.name : '' }
              </h1>
              <table>
                <tbody>
                  <tr>
                    <td width="200px">Username</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.username : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Email</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.email : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Phone</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.phone : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Website</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.website : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Address</td>
                    <td className="font-semibold">:
                      {
                        props.user_data ?
                        ` ${props.user_data.address.street}, ${props.user_data.address.suite}, ${props.user_data.address.city}`
                        : ''
                      }
                      <br/>
                      &nbsp;&nbsp;{ props.user_data ? `Zipcode: ${props.user_data.address.zipcode}` : '' }
                    </td>
                  </tr>
                  <tr>
                    <td width="200px" className="text-xl font-semibold">Company</td>
                  </tr>
                  <tr>
                    <td width="200px">Name</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.company.name : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Catch Phrase</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.company.catchPhrase : '' }</td>
                  </tr>
                  <tr>
                    <td width="200px">Bussiness</td>
                    <td className="font-semibold">: { props.user_data ? props.user_data.company.bs : '' }</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-xl font-semibold mt-6">
                Maps
              </h2>
              <Wrapper
                apiKey={"AIzaSyChdfe5cvHf1GQDCZdxE40ys3TLIsX6Zzk"}
                render={render}
                libraries={["places"]}>
                <Map center={center} zoom={zoom} />
              </Wrapper>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user_data: state.UsersReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSelectedUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors)
