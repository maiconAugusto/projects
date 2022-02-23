import mongoose from 'mongoose';

class Database {
  public async index () {
    try {
      await mongoose.connect(process.env.MONGO || '', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      });
    } catch (error) {
      throw new Error("connection database error");
    }
  }
}
export default new Database();