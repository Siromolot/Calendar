import mongoose from 'mongoose';
import uuid from "uuid";

const themeSchema = new mongoose.Schema(
    {
      
      department: {
        type: String,
        required: true,
      },
      
      title: {
        type: String,
        required: true
      },
  
      description: {
        type: String,
        required: true
      },
  
      link: {
        type: String,
        required: true
      },
      
      date: {
        type: Number,
        required: true
      },
      
      id: {
        type: String,
        required: true,
        default: uuid,
      },

    },
    {
        timestamps: true,
    }
);

export default themeSchema;