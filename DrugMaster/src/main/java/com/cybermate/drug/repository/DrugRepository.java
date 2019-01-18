package com.cybermate.drug.repository;

import org.springframework.data.repository.CrudRepository;


import com.cybermate.drug.model.Drug;

public interface DrugRepository extends CrudRepository<Drug, Integer>{
public Drug getDrugByName(String drug_name);
}
