package com.emp.payroll.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.payroll.model.Employee;
import com.emp.payroll.repository.EmpRepository;

@Repository
@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping("/employeepayroll/emp/")
public class EmpController {

	@Autowired
	private EmpRepository emprepository;
	
	@GetMapping("/{empId}")
	public Optional<Employee> getEmployeeById(@PathVariable int empId)
	{
	
		System.out.println(emprepository.findById(empId));
		return emprepository.findById(empId);
		
		//return "redirect:/admin/{empId}"; 
	}
	
		
	}
