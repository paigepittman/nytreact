import React from "react";
// import API from "../../utils/API";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange(event) {
    this.setState({ input: event.target.value});
  }
  handleSubmit() {
    const searchterm = this.state.input;
    API.runQuery(searchterm).then(this.props.runQuery);
    this.setState({ input: "" });
  }
  render() {
      return (
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            search for articles
          </label>
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleChange}
            value={this.state.input}
            placeholder="enter search here"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <button
            onClick={this.handleSubmit}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
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

export default Search;
