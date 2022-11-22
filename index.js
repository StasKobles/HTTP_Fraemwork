const PORT = process.env.PORT || 5000;
const Application = require("./Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./parseJson");
const parseUrl = require("./parseUrl");
const mongoose = require("mongoose");
const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://Stas:1111@cluster0.tbiyxjb.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start()