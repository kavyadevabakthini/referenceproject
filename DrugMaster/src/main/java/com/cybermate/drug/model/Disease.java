package com.cybermate.drug.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "diseases")
public class Disease {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "diseases_id")
	private int disease_id;
	@Column(name="diseases_name")
	private String name;
	@Column(name="icd_code")
	private String icd_code;
	@Column(name="active")
	private boolean active;

	public Disease() {
		super();
	}

	public int getDisease_id() {
		return disease_id;
	}

	public void setDisease_id(int disease_id) {
		this.disease_id = disease_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIcd_code() {
		return icd_code;
	}

	public void setIcd_code(String icd_code) {
		this.icd_code = icd_code;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
