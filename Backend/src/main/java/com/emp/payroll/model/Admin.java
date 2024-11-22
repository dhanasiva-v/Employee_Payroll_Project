package com.emp.payroll.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(initialValue=1, name = "seq", allocationSize=1)

public class Admin {
	
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq")
private int id;

private String emailId;
private String userName; 
private  String password;

public Admin() {
}

public Admin(int id, String emailId, String userName, String password) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.userName = userName;
	this.password = password;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


}
