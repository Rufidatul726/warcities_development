import mongoose from "mongoose";

const webteamSchema = new mongoose.Schema({
   user_id : {
         type : mongoose.Schema.Types.ObjectId,
         required : [true, "Please enter user id"]
    },
    position : {
        type : String,          //FOunder, Co-Founder, Member
        required : [true, "Please enter position"]
    },
},{
    timestamps : true
});

let webteam_model;

try {
    webteam_model = mongoose.model("webteams");
}catch(error) {
    webteam_model = mongoose.model("webteams", webteamSchema);
}

const Webteam = webteam_model;

export default Webteam;