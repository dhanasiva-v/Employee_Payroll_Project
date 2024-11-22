package com.emp.payroll.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="attendance")
public class Attendance {
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long empId;
	private String Date;
	private String Status;
	
	public Attendance(long empId, String date, String status) {
		super();
		this.empId = empId;
		Date = date;
		Status = status;
	}

	public Attendance() {}

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

}