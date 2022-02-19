const app=require("./index");
const connect=require("./config/db")
app.listen(1234,async function()
{
    await connect()
    console.log("Listening to port 1234")
})