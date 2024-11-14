// title, thumbnail, description, status, slug, delete {type, default}
// timestamps: true
import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title: String,
        thumbnail: String,
        description: String,
        status: String,
        slug: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    {
        timestamps: true,
    }
);

export const Topic = mongoose.model("Topic", topicSchema, "topics");
