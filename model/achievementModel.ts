import mongoose, { Document} from 'mongoose';

interface IAchievement extends Document {
    image: string;
    title: string;
    description: string;
}

const achievementSchema = new mongoose.Schema({
    image : {
        type : String,
        required : [true, "Please enter image"]
    },
    title : {
        type : String,
        required : [true, "Please enter title"]
    },
    description : {
        type : String,
        required : [true, "Please enter description"]
    },
},{
    timestamps : true
});

const Achievement = mongoose.model<IAchievement>('achievements', achievementSchema);

export default Achievement;