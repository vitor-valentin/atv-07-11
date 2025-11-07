const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const token = req.cookies && req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Erro' });
    }

    try{
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch(err) {
        return res.status(401).json({error: 'Erro'});
    }
};