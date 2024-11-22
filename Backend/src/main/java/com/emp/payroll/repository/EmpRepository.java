package com.emp.payroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emp.payroll.model.Employee;

public interface EmpRepository extends JpaRepository<Employee, Integer>{
	public Employee findByEmailId(String emaiild);

}
