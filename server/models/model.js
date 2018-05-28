const mongoose = require('mongoose');
const { Scheme } = mongoose;

const modelSchema = new Scheme({
    id: String,
	name: String,
	description: String,
	item: String,
	type: String,
	area: String,
	visibility: String,
	labels: [{
        id: String,
        location: { //location of label
            x: Number,
            y: Number,
            z: Number
        },
        name: String,
        type: String,
        description: String
	}],
	tags: Array,
    created: Date,
    lastModified: Date
});

mongoose.model('model', modelSchema);