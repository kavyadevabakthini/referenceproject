package com.cybermate.drug.repository;

import org.springframework.data.repository.CrudRepository;

import com.cybermate.drug.model.Disease;


public interface DiseaseRepository extends CrudRepository<Disease, Integer>{
	public Disease getDiseaseByName(String name);
}
