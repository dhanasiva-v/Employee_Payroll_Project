package com.emp.payroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.payroll.model.Employee;

public interface RegistrationRepository extends JpaRepository<Employee, Integer> {
	
	public Employee findByEmailId(String emailId);
	public Employee findByEmailIdAndPassword(String emailId, String password);
	public Employee findByEmailIdAndMobNo(String emailId, String mobNO);

}
