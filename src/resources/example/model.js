import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

const Example = mongoose.model('Example', exampleSchema);

export default Example;
