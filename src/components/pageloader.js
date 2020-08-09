import React from "react"
import "../styles/pageloader.css"
export default function Pageloader(props) {
  return (
    <div hidden={props.isloading} className="loading style-2">
      <div className="loading-wheel"></div>
    </div>

    // <div hidden={props.isloading} className="loaderwrapper">
    //   <div className="loader-searchcan"></div>
    // </div>
  )
}
