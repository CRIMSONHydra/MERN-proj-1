import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const genToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '30d'});
}

export const register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = User.findOne({email});
        if(existingUser) {
            res.status(400).json({message: "User already exists"});
        }

        const user = await User.create({email, password});
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email}).select('+password');
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}