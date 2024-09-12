import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  img: {
    type: String, 
    required: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'fullstack'],
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
  url: {
    type: String,
    required: true
  },
  sourceUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
