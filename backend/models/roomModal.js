const mongoose = require('mongoose');
const { Schema } = mongoose;

var roomSchema = new Schema(
  {
    topic: { type: String, required: true },
    roomType: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    speakers: { 
        type: [
            {
                type: Schema.Types.ObjectId, ref: 'User'
            }
        ],
        required: false
     },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema, 'rooms');
