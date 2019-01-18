package com.cybermate.drug.service;

import java.util.List;

import com.cybermate.drug.model.Disease;


public interface IDiseaseService {
	List<Disease> getAllDiseases();

	Disease getDiseaseById(int disease_id);

	boolean addDisease(Disease disease);

	void updateDisease(Disease disease);
}
