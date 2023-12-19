import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/card.css"
import { formatDistanceToNow } from "date-fns"

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
          Posted {formatDistanceToNow(this.props.postedon)}
        </div>
      </div>
    )
  }
}

export default Card
