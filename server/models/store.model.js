const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    number: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Store = mongoose.model("Destination", StoreSchema);

module.exports = { Store: Store };
