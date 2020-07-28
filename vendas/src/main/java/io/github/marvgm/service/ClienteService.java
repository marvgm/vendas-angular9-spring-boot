package io.github.marvgm.service;

import io.github.marvgm.model.Cliente;
import io.github.marvgm.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    public ClienteRepository clienteRepository;

    public void salvarCliente(Cliente cliente){
        validarCliente(cliente);
        clienteRepository.persistir(cliente);
    }

    public void validarCliente(Cliente cliente){

    }
}
