package com.cybermate.drug.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.cybermate.drug.model.PhysicalExamTxnDtl;

public interface ExamTxnDtlsRepository extends CrudRepository<PhysicalExamTxnDtl, Integer> {
	List<PhysicalExamTxnDtl> getByExamId(int id);
}
