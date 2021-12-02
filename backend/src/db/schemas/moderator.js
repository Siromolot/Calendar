import mongoose from 'mongoose';
import uuid from "uuid";

const moderatorSchema = new mongoose.Schema(
    {
  
      name: {
        type: String,
        required: true,
      },
      
      department: {
        type: String,
        required: true,
      },
      
      login: {
        type: String,
        required: true,
      },
      
      password: {
        type: String,
        required: true,
      },
      
      id: {
        type: String,
        required: true,
        default: uuid,
      },
      
      token: {
        type: String,
        required: true,
        default: uuid,
      },
    },
    {
        timestamps: true,
    }
);

export default moderatorSchema;