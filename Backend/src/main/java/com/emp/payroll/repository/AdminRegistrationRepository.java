package com.emp.payroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.payroll.model.Admin;


public interface AdminRegistrationRepository extends JpaRepository<Admin, Integer> {
	
	public Admin findByEmailId(String emailId);
	public Admin findByEmailIdAndPassword(String emailId, String password);
	
}
