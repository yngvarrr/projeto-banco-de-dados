package io.github.fabiodamas.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.fabiodamas.backend.model.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}
