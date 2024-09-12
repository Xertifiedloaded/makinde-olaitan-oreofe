import mongoose from 'mongoose';


const BlogSchema = new mongoose.Schema({
  img: {
    type: String, 
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tags: [String], 
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
