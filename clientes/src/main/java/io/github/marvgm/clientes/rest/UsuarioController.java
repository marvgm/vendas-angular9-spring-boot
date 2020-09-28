package io.github.marvgm.clientes.rest;

import io.github.marvgm.clientes.exception.UsuarioCadastradoException;
import io.github.marvgm.clientes.model.entity.Usuario;
import io.github.marvgm.clientes.model.repository.UsuarioRepository;
import io.github.marvgm.clientes.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody @Valid Usuario usuario){
        try{
            usuarioService.salvar(usuario);
        } catch (UsuarioCadastradoException ex){
            throw new ResponseStatusException( HttpStatus.BAD_REQUEST, ex.getMessage() );
        }
    }
}
