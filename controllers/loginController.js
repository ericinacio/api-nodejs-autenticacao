import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

import { config } from 'dotenv'
config();
const { SECRET } = process.env;

export default {
    register: async (req, res) => {
        const { name, email, password, confirmPassword } = req.body
        if (!name)
            return res.status(422).json({ msg: 'O nome é obrigatório!' })
        if (!email)
            return res.status(422).json({ msg: 'O email é obrigatório!' })
        if (!password)
            return res.status(422).json({ msg: 'A senha é obrigatória!' })
        if (password != confirmPassword)
            return res.status(422).json({ msg: 'As senhas não conferem!' })
        const userExists = await User.findOne({ email: email })
        if (userExists)
            return res.status(422).json({ msg: 'Por favor, utilize outro e-mail!' })
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        const user = new User({
            name,
            email,
            password: passwordHash,
        })
        try {
            await user.save()
            res.status(201).json({ msg: 'Usuário criado com sucesso!' })
        } catch (error) {
            res.status(500).json({ msg: "Ocorreu um erro no servidor, tente novamente mais tarde!" })
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body
        if (!email)
            return res.status(422).json({ msg: 'O email é obrigatório!' })
        if (!password)
            return res.status(422).json({ msg: 'A senha é obrigatória!' })
        const user = await User.findOne({ email: email })
        if (!user)
            return res.status(422).json({ msg: 'Usuário não encontrado!' })
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword)
            return res.status(422).json({ msg: 'Senha inválida!' })
        try {
            const token = jwt.sign(
                {
                    id: user._id
                },
                SECRET,
            )
            res.status(200).json({ msg: "Autenticação realizada com sucesso!", token })
        } catch (error) {
            res.status(500).json({ msg: "Ocorreu um erro no servidor, tente novamente mais tarde!" })
        }
    }

}