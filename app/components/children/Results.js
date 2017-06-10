import React from "react";
// import API from "../../utils/API"

class Results extends React.Component {

  saveArticle(article) {
    API.saveArticle(article).then(this.props.getArticles);
  }
  deleteArticle(id) {
    API.deleteArticle(id).then(this.props.getArticles);
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.saveArticle(this.props.article)}
              style={styles.saveStyle}
              // className={this.props.article.saved ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteArticle(this.props.article._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {/* {this.props.article.text} */}
          </div>
        </div>
      </div>
    );
  }

}
const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};


export default Results;
