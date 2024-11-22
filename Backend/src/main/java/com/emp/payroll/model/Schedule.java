package com.emp.payroll.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="schedule")
public class Schedule {
	@Id
  private long empId;
	@Column(name = "Date")
	private String Date;
	@Column(name = "Shift")
  private String Shift;
	@Column(name = "startingTime")
	  private String startingTime;
	@Column(name = "endTime")
	  private String endTime;
	@Column(name = "Duration")
	  private String Duration;
	
	
	public Schedule() {
		  
	  }
	
	
	public Schedule(String date, String shift, String startingTime, String endTime, String duration) {
		super();
		Date = date;
		Shift = shift;
		this.startingTime = startingTime;
		this.endTime = endTime;
		Duration = duration;
	}


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


	public String getShift() {
		return Shift;
	}


	public void setShift(String shift) {
		Shift = shift;
	}


	public String getStartingTime() {
		return startingTime;
	}


	public void setStartingTime(String startingTime) {
		this.startingTime = startingTime;
	}


	public String getEndTime() {
		return endTime;
	}


	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}


	public String getDuration() {
		return Duration;
	}


	public void setDuration(String duration) {
		Duration = duration;
	}


	
	 }