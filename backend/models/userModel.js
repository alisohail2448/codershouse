const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    phone: { type: String, required: false },
    email: { type: String, required: false },
    name: { type: String, required: false },
    avatar: { type: String, required: false , get: (avatar) => {
      if(avatar){
        return `${process.env.BASE_URL}${avatar}`;
      }
      return avatar;
    }},
    activated: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true
    }
  }
);

module.exports = mongoose.model("User", userSchema);
