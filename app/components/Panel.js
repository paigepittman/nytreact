import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {

  favoriteArticle(article) {
    API.favoriteQuote(article).then(this.props.getQuotes);
  }

  deleteQuote(id) {
    API.deleteQuote(id).then(this.props.getQuotes);
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.favoriteQuote(this.props.article)}
              style={styles.favoriteStyle}
              className={this.props.article.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteQuote(this.props.article._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.article.text}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;
