package com.cybermate.drug.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybermate.drug.model.Drug;
import com.cybermate.drug.repository.DrugRepository;

@Service
public class DrugService implements IDrugService {
	@Autowired
	private DrugRepository drugRepository;

	public List<Drug> getAllDrugs() {
		List<Drug> list = new ArrayList<>();
		drugRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	public Drug getDrugById(int drug_id) {
		Drug obj = drugRepository.findById(drug_id).get();
		return obj;
	}

	public Drug getDrugByName(String drug_name) {
		Drug obj = drugRepository.getDrugByName(drug_name);
		return obj;

	}

	public boolean addDrug(Drug drug) {
		Drug persistedDrug = drugRepository.getDrugByName(drug.getName());
		if (persistedDrug != null) {
			return false;
		}
		drugRepository.save(drug);
		return true;
	}

	public void updateDrug(Drug drug) {
		drugRepository.save(drug);

	}

	

}
