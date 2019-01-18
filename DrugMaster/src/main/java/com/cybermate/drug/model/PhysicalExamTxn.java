package com.cybermate.drug.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


/**
 * The persistent class for the physical_exam_txn database table.
 * 
 */
@Entity
@Table(name="physical_exam_txn")
@NamedQuery(name="PhysicalExamTxn.findAll", query="SELECT p FROM PhysicalExamTxn p")
public class PhysicalExamTxn implements Serializable {
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Column(name="notes")
	private String notes;

	@Column(name="medical_record_no")
	private String medicalRecordNo;
	@Column(name="visit_id")
	private String visitId;

	@Column(name="episode_id")
	private String episodeId;

	@JsonManagedReference
	//bi-directional many-to-one association to HabitsTxnDtl
	@OneToMany(cascade = CascadeType.ALL,mappedBy="examTxn")
	private List<PhysicalExamTxnDtl> examTxnDtls;

 public PhysicalExamTxn() {
	
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getMedicalRecordNo() {
		return medicalRecordNo;
	}

	public void setMedicalRecordNo(String medicalRecordNo) {
		this.medicalRecordNo = medicalRecordNo;
	}

	public String getVisitId() {
		return visitId;
	}

	public void setVisitId(String visitId) {
		this.visitId = visitId;
	}

	public String getEpisodeId() {
		return episodeId;
	}

	public void setEpisodeId(String episodeId) {
		this.episodeId = episodeId;
	}

	public List<PhysicalExamTxnDtl> getExamTxnDtls() {
		return examTxnDtls;
	}

	public void setExamTxnDtls(List<PhysicalExamTxnDtl> examTxnDtls) {
		this.examTxnDtls = examTxnDtls;
	}

	public PhysicalExamTxnDtl addPhysicalExamTxnDtl(PhysicalExamTxnDtl examTxnDtl) {
		getExamTxnDtls().add(examTxnDtl);
		examTxnDtl.setExamTxn(this);

		return examTxnDtl;
	}

	public PhysicalExamTxnDtl removePhysicalExamTxnDtl(PhysicalExamTxnDtl examTxnDtl) {
		getExamTxnDtls().remove(examTxnDtl);
		examTxnDtl.setExamTxn(null);

		return examTxnDtl;
	}

}