
package com.barbearia.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cliente;
    private String servico;
    private LocalDateTime dataHora;
    private String barbeiro;
    private String observacoes;
}
