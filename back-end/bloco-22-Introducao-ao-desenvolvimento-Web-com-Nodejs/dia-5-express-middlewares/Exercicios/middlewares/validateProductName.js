const validateProductName = (req, res, next) => {
  const { productName } = req.body;
  if(!productName) return res.status(400).json({ message: 'O campo productName é obrigatório!' });

  if(productName.length < 4) return res.status(400).json({ message: 'O nome do produto precisa ter mais que 4 caracteres.' });

  next();
};

module.exports = { validateProductName };