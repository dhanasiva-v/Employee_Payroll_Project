package com.emp.payroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.payroll.model.Employee;


@Repository
public interface AdminRepository extends JpaRepository<Employee, Integer> {


}
