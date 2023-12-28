# REQUESTS

### ROTA PUBLICA
`GET http://localhost:3000/`

### ROTA PRIVADA
> E preciso enviar um Bearer Token, obtido no login de usuário.

`GET http://localhost:3000/user/id-numerico`

### CRIAÇÃO DE USUÁRIO
`GET http://localhost:3000/auth/register`

BODY
```
{
  "name": "um-nome",
  "email":"um-email@gmail.com",
  "password":"uma-senha",
  "confirmPassword":"confirmação-da-senha"
}
```

### LOGIN DE USUÁRIO
`GET http://localhost:3000/auth/login`

BODY
```
{
  "name": "nome-registrado",
  "email":"email-registrado@gmail.com",
  "password":"senha-registrada"
}
```
