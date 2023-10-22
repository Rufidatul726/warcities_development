import mongoose, { Document} from 'mongoose';

interface IGame extends Document {
    name: string;
    logo: string;
    type: string; // 'solo', 'duo', 'squad'
}

const gameSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    logo : {
        type : String,
    },
    type : {
        type : String,
        required : [true, "Please enter type"]
    },
},{
    timestamps : true
});

const Game = mongoose.model<IGame>('games', gameSchema);

export default Game;