"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../models/User"));
const Thoughts_1 = __importDefault(require("../models/Thoughts"));
const MONGO_URI = 'mongodb://127.0.0.1:27017/socialNetworkDB';
const seed = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log('[Seed] Connected to MongoDB');
        // Clear old data
        await User_1.default.deleteMany({});
        await Thoughts_1.default.deleteMany({});
        console.log('[Seed] Old data cleared');
        // Create a test user
        const user = await User_1.default.create({
            username: 'Pablo Castro',
            email: 'test@gmail.com',
        });
        console.log('[Seed] User created:', user);
        // Optional: create a test thought
        const thought = await Thoughts_1.default.create({
            thoughtText: 'This is my first seeded thought!',
            username: user.username
        });
        // Push thought to user
        user.thoughts.push(thought._id);
        await user.save();
        console.log('[Seed] Thought created and linked to user:', thought);
        console.log('[Seed] Done ✅');
        process.exit(0);
    }
    catch (err) {
        console.error('[Seed] Error seeding data:', err);
        process.exit(1);
    }
};
seed();
