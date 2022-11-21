package io.github.fabiodamas.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;

	private String email;

	private String status;

	private String cpf;

	private String valor;

	private String metodo;
	
	public Client() {
		
	}	
	

	public Client(long id, String name, String email, String status, String cpf, String valor, String metodo) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.status = status;
		this.cpf = cpf;
		this.valor = valor;
		this.metodo = metodo;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus(){
		return status;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public String getCpf(){
		return cpf;
	}

	public void setCpf(String cpf){
		this.cpf = cpf;
	}

	public String getValor(){
		return valor;
	}

	public void setValor(String valor){
		this.valor = valor;
	}
	
	public String getMetodo(){
		return metodo;
	}

	public void setMetodo(String metodo){
		this.metodo = metodo;
	}
}
