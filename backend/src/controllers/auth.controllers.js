import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
    try {
        const { fullName, username, birth_date, gender, photo, password, confirmPassword } = req.body;

        // Validação de campos vazios
        if (!fullName || !username || !birth_date || !gender || !password || !confirmPassword) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "As senhas não coincidem" });
        }

        let data = [];
        try {
            const fileData = fs.readFileSync(path.resolve('./samples/users.json'), 'utf-8');
            data = JSON.parse(fileData);
        } catch (parseError) {
            console.error("Error parsing users.json:", parseError);
            return res.status(500).json({ error: "Error reading users.json" });
        }

        const user = data.find(user => user.username === username);
        if (user) {
            return res.status(409).json({ error: "Nome de usuário já utilizado" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const id = String(data.length + 1);

        const newUser = {
            id,
            fullName,
            username,
            birth_date,
            gender,
            photo,
            password: hashedPassword,
        };

        generateTokenAndSetCookie(id, res);

        data.push(newUser);

        fs.writeFileSync(path.resolve('./samples/users.json'), JSON.stringify(data, null, 2));

        res.status(201).json({
            id,
            fullName,
            username,
            birth_date,
            gender,
        });
    } catch (error) {
        console.error("Error in signup controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        var data =  JSON.parse(fs.readFileSync(path.resolve('./samples/users.json'), 'utf-8'))
        const user = data.find(user => user.username === username);

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        generateTokenAndSetCookie(data.id, res)

        res.status(200).json({
            id: data.id,
            fullName: data.fullName,
            username: data.username,
        })


    } catch (error) {
        console.log("Error in login controller:", error.message)
        res.status(500).json({
            error:"Internal server error"
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})

        res.status(200).json({
            message: "Logged out succesfully"
        })

    } catch (error) {
        console.log("Error in logout controller:", error.message)
        res.status(500).json({
            error:"Internal server error"
        })
    }
}