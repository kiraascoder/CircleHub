import mongosee from "mongoose";

const userSchema = new mongosee.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});

export default mongosee.model("User", userSchema);

