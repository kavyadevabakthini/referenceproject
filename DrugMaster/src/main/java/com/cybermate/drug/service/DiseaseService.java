package com.cybermate.drug.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybermate.drug.model.Disease;

import com.cybermate.drug.repository.DiseaseRepository;
@Service
public class DiseaseService implements IDiseaseService {
@Autowired
private DiseaseRepository diseaseRepository;
	@Override
	public List<Disease> getAllDiseases() {
		List<Disease> list = new ArrayList<>();
		diseaseRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public Disease getDiseaseById(int disease_id) {
		Disease obj = diseaseRepository.findById(disease_id).get();
		return obj;
	}

	@Override
	public boolean addDisease(Disease disease) {
		Disease persistedDisease = diseaseRepository.getDiseaseByName(disease.getName());
		if (persistedDisease != null) {
			return false;
		}
		diseaseRepository.save(disease);
		return true;
	}
	@Override
	public void updateDisease(Disease disease) {
		diseaseRepository.save(disease);
		
	}

}
