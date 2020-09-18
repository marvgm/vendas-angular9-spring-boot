package io.github.marvgm.clientes.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

    @PostMapping
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO servicoPrestadoDTO){
        return null;

    }
}
