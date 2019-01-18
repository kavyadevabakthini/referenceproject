package com.cybermate.drug.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cybermate.drug.model.PhysicalExamTxn;



public interface ExamRepository extends CrudRepository<PhysicalExamTxn, Integer>{


	@Query(value="select * from physical_exam_txn c where c.medical_record_no = :mrno and c.episode_id=:eid and c.visit_id=:vid", nativeQuery=true)
	List<PhysicalExamTxn> getByMrnoEidVid(@Param("mrno") String mrno,@Param("eid") String eid,@Param("vid") String vid);

}