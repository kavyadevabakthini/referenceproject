package com.cybermate.drug.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "drug")
public class Drug {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "drug_id")
	private int drug_id;
	@Column(name = "drug_name")
	private String name;
	@Column(name = "active")
	private boolean active;

	
	public Drug() {
		super();
	}

	public Drug(int drug_id, String name, boolean active) {
		super();
		this.drug_id = drug_id;
		this.name = name;
		this.active = active;
	}

	public int getDrug_id() {
		return drug_id;
	}

	public void setDrug_id(int drug_id) {
		this.drug_id = drug_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}


	
	@Override
	public String toString() {
		return "Drug [drug_id=" + drug_id + ", name=" + name + ", active=" + active + "]";
	}

}
