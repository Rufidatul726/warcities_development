import mongoose, { Document} from 'mongoose';

interface ITournament extends Document {
  name: string;
  game: mongoose.Types.ObjectId;
  type: string; // 'solo', 'duo', 'squad'
  host: mongoose.Types.ObjectId;
  image?: string;
  description?: string;
  reg_startdate: Date;
  reg_enddate: Date;
  tournament_startdate: Date;
  tournament_enddate: Date;
  Number_of_eliminations: number;
  number_of_min_players_per_team: number;
  number_of_max_players_per_team: number;
  toss_type: string;
  registrationFees: number;
  prizePool: number;
  rules: string;
  status?: string; // 'upcoming', 'ongoing', 'completed'
  participants: number;
  winner?: mongoose.Types.ObjectId;
}

const tournamentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    game : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter game"]
    },
    type : {
        type : String,            //solo, duo, squad    
        required : [true, "Please enter type"]
    },
    host : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Please enter host"]
    },
    image : {
        type : String,
    },
    description : {
        type : String,
    },
    reg_startdate : {
        type : Date,
        required : [true, "Please enter date"]
    },
    reg_enddate : {
        type : Date,
        required : [true, "Please enter date"]
    },
    tournament_startdate : {
        type : Date,
        required : [true, "Please enter date"]
    },
    tournament_enddate : {
        type : Date,
        required : [true, "Please enter date"]
    },
    Number_of_eliminations : {
        type : Number,
        required : [true, "Please enter number of eliminations"]
    },
    number_of_min_players_per_team : {
        type : Number,
        required : [true, "Please enter number of min players per team"]
    },
    number_of_max_players_per_team : {
        type : Number,
        required : [true, "Please enter number of max players per team"]
    },
    toss_type : {
        type : String,
        required : [true, "Please enter toss type"]
    },
    registrationFees : {
        type : Number,
        required : [true, "Please enter registration fees"]
    },
    prizePool : {
        type : Number,
        required : [true, "Please enter prize pool"]
    },
    rules : {
        type : String,
        required : [true, "Please enter rules"]
    },
    status : {
        type : String,              //upcoming, ongoing, completed
    },
    participants : {
        type : Number,
        required : [true, "Please enter participants"]
    },
    winner : {
        type : mongoose.Schema.Types.ObjectId,
    },
},{
    timestamps : true
});

const Tournament = mongoose.model<ITournament>('tournaments', tournamentSchema);

export default Tournament;