package com.emp.payroll.model;

	import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

	@Entity
	public class Timesheet {
		
		@Id
		//@GeneratedValue(strategy = GenerationType.AUTO)
		private Integer empId;
		
		@Column(name="date")
		private String date;
		private String inTime;
		private String outTime;
		
		private String regularTime;
		private String breakTime;
		private String overtimeHours;
		private String totalHours;
		
		public Timesheet() {
		}
		
		public Timesheet( Integer empId,String date, String inTime, String outTime, String regularTime, String breakTime,
				String overtimeHours, String totalHours) {
			super();
			this.empId =empId;
			this.date = date;
			this.inTime = inTime;
			this.outTime = outTime;
			this.regularTime = regularTime;
			this.breakTime = breakTime;
			this.overtimeHours = overtimeHours;
			this.totalHours = totalHours;
		}
		public Integer getEmpId() {
			return empId;
		}
		public void setEmpId(Integer empId) {
			this.empId = empId;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public String getInTime() {
			return inTime;
		}
		public void setInTime(String inTime) {
			this.inTime = inTime;
		}
		public String getOutTime() {
			return outTime;
		}
		public void setOutTime(String outTime) {
			this.outTime = outTime;
		}
		public String getRegularTime() {
			return regularTime;
		}
		public void setRegularTime(String regularTime) {
			this.regularTime = regularTime;
		}
		public String getBreakTime() {
			return breakTime;
		}
		public void setBreakTime(String breakTime) {
			this.breakTime = breakTime;
		}
		public String getOvertimeHours() {
			return overtimeHours;
		}
		public void setOvertimeHours(String overtimeHours) {
			this.overtimeHours = overtimeHours;
		}
		public String getTotalHours() {
			return totalHours;
		}
		public void setTotalHours(String totalHours) {
			this.totalHours = totalHours;
		}
		
	}