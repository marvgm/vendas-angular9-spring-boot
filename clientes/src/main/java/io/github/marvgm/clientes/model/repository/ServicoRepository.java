package io.github.marvgm.clientes.model.repository;

import io.github.marvgm.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
