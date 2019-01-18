package abc;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the physical_exam_txn database table.
 * 
 */
@Entity
@Table(name="physical_exam_txn")
@NamedQuery(name="PhysicalExamTxn.findAll", query="SELECT p FROM PhysicalExamTxn p")
public class PhysicalExamTxn implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private PhysicalExamTxnPK id;

	private String notes;

	public PhysicalExamTxn() {
	}

	public PhysicalExamTxnPK getId() {
		return this.id;
	}

	public void setId(PhysicalExamTxnPK id) {
		this.id = id;
	}

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

}