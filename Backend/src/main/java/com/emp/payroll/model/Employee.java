package com.emp.payroll.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


@Entity
@Table(name="emplyoee")
@SequenceGenerator(initialValue=10000, name = "seq", allocationSize=1)
public class Employee {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq")
	private int empId;
	
	private String fName; 
	private  String lName;
	private String dob;	
	private String gender; 
	private String street;
	private String location; 
	private String city; 
	private String state; 
	private int pincode; 
	private String mobNo; 
	@Column(unique = true)
	private String emailId; 
	private String password;
	private String designation;
	
	public Employee()
	{
		
	}
	
	
	public Employee(int empId, String fName, String lName, String dob, String gender, String street, String location,
			String designation, String city, String state, int pincode, String mobNo, String emailId, String password) {
		super();
		this.empId = empId;
		this.fName = fName;
		this.lName = lName;
		this.dob = dob;
		this.gender = gender;
		this.street = street;
		this.location = location;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.mobNo = mobNo;
		this.emailId = emailId;
		this.password = password;
		this.designation = designation;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getMobNo() {
		return mobNo;
	}
	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getdesignation() {
		return designation;
	}
	public void setdesignation(String designation) {
		this.designation = designation;
	}
}
