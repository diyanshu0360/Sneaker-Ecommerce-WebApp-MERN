import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const tokenParts = authHeader.split(" ");
    if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
      const token = tokenParts[1];
      jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
          return res.status(403).json({ error: "Token is not valid" });
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(403).json({ error: "Invalid token format" });
    }
  } else {
    return res.status(401).json({ error: "You are not authenticated" });
  }
};


const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: "You are not allowed to do that" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: "You are not allowed to do that" });
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
