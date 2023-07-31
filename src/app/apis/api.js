// pages/api/login.js
export default function handler(req, res) {
  // Aquí deberías realizar la lógica de autenticación.
  // Por ejemplo, verificar el usuario y la contraseña en la base de datos
  // y si la autenticación es exitosa, devolver un token de acceso.

  const { username, password } = req.body;

  // Simularemos una autenticación exitosa con un token de acceso.
  if (username === "user" && password === "password") {
    const token = "tu_token_de_acceso_jwt_aqui";

    res.status(200).json({
      user: { username: "user" }, // Podrías incluir más información del usuario aquí
      token
    });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
}
