package com.emp.payroll.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Leaves")
public class Leave {
	@Id
  private long empId;
	@Column(name = "LeaveType")
	  private String leavetype;
	@Column(name = " StartDate")
	private String startdate;
	@Column(name = "EndDate")
	private String enddate;
	@Column(name = "Duration")
   private String duration;
  
  public Leave() 
  { 
  } 
public Leave(long empId, String leavetype, String startdate, String enddate, String duration) {
	super();
	this.empId = empId;
	this.leavetype = leavetype;
	this.startdate = startdate;
	this.enddate = enddate;
	this.duration = duration;
}

public long getEmpId() {
	return empId;
}

public void setEmpId(long empId) {
	this.empId = empId;
}

public String getLeavetype() {
	return leavetype;
}

public void setLeavetype(String leavetype) {
	this.leavetype = leavetype;
}

public String getStartdate() {
	return startdate;
}

public void setStartdate(String startdate) {
	this.startdate = startdate;
}

public String getEnddate() {
	return enddate;
}

public void setEnddate(String enddate) {
	this.enddate = enddate;
}

public String getDuration() {
	return duration;
}

public void setDuration(String duration) {
	this.duration = duration;
}


}