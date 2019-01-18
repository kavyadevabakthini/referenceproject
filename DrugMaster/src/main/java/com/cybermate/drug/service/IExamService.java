package com.cybermate.drug.service;

import java.util.List;


import com.cybermate.drug.model.PhysicalExamTxn;
import com.cybermate.drug.model.PhysicalExamTxnDtl;

public interface IExamService {
	// List<PhysicalExamTxn> getTxnDtlsById(String medicalRecordNo, String visitId,
	// String episodeId);

	List<PhysicalExamTxnDtl> getAllDtls();
	PhysicalExamTxn getExamById(int examId);

	public List<PhysicalExamTxn> getByMrnoEidVid(String mrno, String eid, String vid);

	public boolean addTxn(PhysicalExamTxn examTxn);

	public void updateTxn(PhysicalExamTxn examTxn);

	void deleteTxn(int id);

}
