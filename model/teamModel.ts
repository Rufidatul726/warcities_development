import mongoose, { Document} from 'mongoose';

interface ITeam extends Document {
    name: string;
    logo: string;
    game: mongoose.Types.ObjectId;
    tournament: mongoose.Types.ObjectId;
    players: Array<string>;
    rank: number;
    description: string;
    status: string; // 'active', 'inactive', 'deleted'
    postion_in_leaderboard: number;
}

const teamSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    logo : {
        type : String,
    },
    game : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter game"]
    },
    tournament : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter tournament"]
    },
    players : {
        type : Array,
    },
    rank : {
        type : Number,
    },
    description : {
        type : String,
    },
    status : {
        type : String,          //active, inactive, deleted
        required : [true, "Please enter status"]
    },
    postion_in_leaderboard : {
        type : Number,
    },
},{
    timestamps : true
});

const Team = mongoose.model<ITeam>('teams', teamSchema);

export default Team;