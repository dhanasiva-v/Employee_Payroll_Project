package com.emp.payroll.controller;

import com.emp.payroll.repository.SalaryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.payroll.model.Salary;

@Service
public class SalaryServices {
	@Autowired
	private SalaryRepository  repo;
	public List<Salary> fetchSalaryList(){
		return	repo.findAll();
		
	}
	
	public  Salary  saveSalaryDb(Salary salary) {
	return	repo.save(salary);
	}
	public Optional<Salary> fetchSalarybyId(int id) {
		return	repo.findById(id);
	}
	
	public Optional<Salary> fetchSalarybyempId(int empId) {
		return	Optional.of(repo.findByEmpId(empId));
	}
	
	
	
	public String deleteSalById(int id)
	   {
			String result;
			try {
					repo.deleteById(id);
					result = "Salary succsessfully deleted";
				} catch (Exception e) {
					result = "Salary  is not deleted";	
				}
			return result;
		}
}