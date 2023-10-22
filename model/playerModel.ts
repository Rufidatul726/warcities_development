import mongoose, { Document} from 'mongoose';

interface IPlayer extends Document {
    game: mongoose.Types.ObjectId;
    game_uid: string;
    in_game_name: string;
    game_server: string;
    game_rank: string;
    position_in_leaderboard: number;
}

const playerSchema = new mongoose.Schema({
    game : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter game"]
    },
    game_uid : {
        type : String,
        required : [true, "Please enter game id"]
    },
    in_game_name : {
        type : String,
    },
    game_server : {
        type : String,
    },
    game_rank : {
        type : String,
    },
    position_in_leaderboard : {
        type : Number,
    },
},{
    timestamps : true
});

const Player = mongoose.model<IPlayer>('players', playerSchema);

export default Player;