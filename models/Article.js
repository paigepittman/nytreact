import mongoose from "mongoose";

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("article", ArticleSchema);
export default Article;
