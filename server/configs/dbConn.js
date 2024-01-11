import mongoose from "mongoose";

/**
 * mongoose.set("strictQuery", false); sets Mongoose's query strictness to false.
 * This means that Mongoose will not return an error if you try to query for a
 * non-existent field. Instead, it will simply return an empty result.
 * With strict query set to true, Mongoose will return an error if you try to
 * query for a non-existent field.
 */
mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI || `mongodb://twiz0949:raj123@ac-dmbufx1-shard-00-00.f1mdamh.mongodb.net:27017,ac-dmbufx1-shard-00-01.f1mdamh.mongodb.net:27017,ac-dmbufx1-shard-00-02.f1mdamh.mongodb.net:27017/?ssl=true&replicaSet=atlas-64gr1x-shard-0&authSource=admin&retryWrites=true&w=majority`)

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
