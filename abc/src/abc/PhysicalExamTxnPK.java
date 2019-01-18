package abc;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the physical_exam_txn database table.
 * 
 */
@Embeddable
public class PhysicalExamTxnPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="medical_record_no")
	private String medicalRecordNo;

	@Column(name="visit_id")
	private String visitId;

	@Column(name="episode_id")
	private String episodeId;

	public PhysicalExamTxnPK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMedicalRecordNo() {
		return this.medicalRecordNo;
	}
	public void setMedicalRecordNo(String medicalRecordNo) {
		this.medicalRecordNo = medicalRecordNo;
	}
	public String getVisitId() {
		return this.visitId;
	}
	public void setVisitId(String visitId) {
		this.visitId = visitId;
	}
	public String getEpisodeId() {
		return this.episodeId;
	}
	public void setEpisodeId(String episodeId) {
		this.episodeId = episodeId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof PhysicalExamTxnPK)) {
			return false;
		}
		PhysicalExamTxnPK castOther = (PhysicalExamTxnPK)other;
		return 
			(this.id == castOther.id)
			&& this.medicalRecordNo.equals(castOther.medicalRecordNo)
			&& this.visitId.equals(castOther.visitId)
			&& this.episodeId.equals(castOther.episodeId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.medicalRecordNo.hashCode();
		hash = hash * prime + this.visitId.hashCode();
		hash = hash * prime + this.episodeId.hashCode();
		
		return hash;
	}
}