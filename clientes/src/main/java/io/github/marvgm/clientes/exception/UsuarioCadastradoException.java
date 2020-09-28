package io.github.marvgm.clientes.exception;

public class UsuarioCadastradoException extends RuntimeException {

    public UsuarioCadastradoException(String login){
        super("Usuário já cadastrado com o login: " + login);
    }
}
