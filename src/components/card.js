import React, { Component } from "react"
import { Link } from "gatsby"
import moments from "moment"

import "../styles/card.css"

class Card extends Component {
  render() {
    return (
      <div className="card mb-4 ">
        <div className="card-body postcard">
          <h2 className="card-title">{this.props.title}</h2>
          <p
            className="card-text  "
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          >
            {/* <Markdown>{this.props.description}</Markdown> */}

            {/* <Markdown children={this.props.description} /> */}
          </p>
          <Link to={`${this.props.index}`} className="btn btn-outline-primary">
            Read More &rarr;
          </Link>
        </div>
        <div className="card-footer postcard text-muted">
          Posted {moments(this.props.postedon).fromNow()}
        </div>
      </div>
    )
  }
}

export default Card
