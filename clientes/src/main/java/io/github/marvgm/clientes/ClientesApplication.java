package io.github.marvgm.clientes;

import io.github.marvgm.clientes.model.entity.Cliente;
import io.github.marvgm.clientes.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.LocalDate;

@EnableSwagger2
@SpringBootApplication
public class ClientesApplication {

	@Bean
	public CommandLineRunner run(@Autowired ClienteRepository clienteRepository){
		return args -> {
			Cliente cliente = new Cliente().builder().cpf("04064385608").nome("teste MARCOS").build();
			clienteRepository.saveAndFlush(cliente);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}

}
