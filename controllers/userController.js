import User from "../models/User.js";

export default {
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id, '-password');
            res.json(user);
        } catch (error) {
            res.status(404).json({ msg: "Usuário não encontrado!" });
        }
    }
}