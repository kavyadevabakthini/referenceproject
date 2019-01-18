package com.cybermate.drug.service;

import java.util.List;

import com.cybermate.drug.model.Drug;

public interface IDrugService {
	List<Drug> getAllDrugs();

	Drug getDrugById(int drug_id);

	boolean addDrug(Drug drug);

	void updateDrug(Drug drug);

}
