
package com.barbearia.repository;

import com.barbearia.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByDataHoraBetween(LocalDateTime inicio, LocalDateTime fim);
}
