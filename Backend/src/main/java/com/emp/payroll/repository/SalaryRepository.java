package com.emp.payroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.payroll.model.Salary;

public interface SalaryRepository extends JpaRepository<Salary, Integer> {

	public Salary findByEmpId(int empId);
	
	
}
