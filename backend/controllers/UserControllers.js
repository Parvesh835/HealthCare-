const User = require('../models/userSchema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const { name, email, phone, id, password } = req.body;

        // check if all fields are filled
        if (!name || !email || !phone || !id || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields must be filled"
            })
        }

        // check if user is already exist

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registed, Please login "
            })
        }

        // hash the password

        const hashedPassword = await bcrypt.hash(password, 10);

        //  create the user 
        const user = new User({
            name, 
            email,
            phone,
            id,
            password: hashedPassword
        })

        // save the user 
        await user.save();

        res.status(201).json({
            success: true,
            message: "User signed up Successfully",
            user: {
                name: user.name,
                phone: user.phone,
                email: user.email,
                id: user.id
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, id, password } = req.body;

        // check if all fields are filled
        if ( !email ||  !id || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields must be filled"
            })
        }

        // check if user is already exist

        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User is not registed, Please signup first "
            })
        }

        // compare the password

        const passEqual = await bcrypt.hash(password, user.password);

        if (!passEqual) {
            return res.status(400).json({
                success: false,
                message: "Password is incorret "
            })
        }

        // create the token

        const payload = {
            email: user.email,
            phone: user.phone,
            id: user.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" })
        
        // create cookie and give response

        const options = {
            expire: "2*60*60*1000",
            httpOnly: true
        }

        res.cookie("cookie", options).status(200).json({
            success: true,
            message: "User signed up Successfully",
            user: {
                name: user.name,
                phone: user.phone,
                email: user.email,
                id: user.id,
                token
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}


module.exports = {signup, login}