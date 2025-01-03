const mongoose = require('mongoose');

const HelpRequestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    status: { type: String, enum: ['open', 'in-progress', 'closed'], default: 'open' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HelpRequest', HelpRequestSchema);
