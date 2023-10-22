import mongoose, { Document} from 'mongoose';

interface IMatch extends Document {
    tournament: mongoose.Types.ObjectId;
    teams: Array<string>;
    date: Date;
    time: string;
    result: string;
}

const matchSchema = new mongoose.Schema({
    tournament : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter tournament"]
    },
    teams : {
        type : Array,
    },
    date : {
        type : Date,
    },
    time : {
        type : String,
    },
    result : {
        type : String,
    },
},{
    timestamps : true
});

const Match = mongoose.model<IMatch>('matches', matchSchema);

export default Match;