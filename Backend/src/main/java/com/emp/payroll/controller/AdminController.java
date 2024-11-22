package com.emp.payroll.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.payroll.model.Employee;
import com.emp.payroll.repository.AdminRepository;

@Repository
@CrossOrigin(origins ="http://localhost:4200/")
@RestController
@RequestMapping("/employeepayroll/ad/")
public class AdminController {

	@Autowired
	private AdminRepository adminrepository;
	// get all employees
	//http://localhost:8085/api/v1/admins
	@GetMapping("/admins")
	public List<Employee> getAllEmployee()
	{
		return adminrepository.findAll();
	}
	
	@PostMapping("/admins")
	public Employee createEmployee(@RequestBody Employee employee) 
	{
		return adminrepository.save(employee);
	}
	
	@GetMapping("/{empId}")
	public Optional<Employee> getEmployeeById(@PathVariable("empId") int empId)
	{
		return Optional.ofNullable(adminrepository.findById(empId).orElseThrow(null));
		//return ResponseEntity.ok(employee);
		//return "redirect:/admin/{empId}"; 
	}
	
	@PutMapping("/{empId}") //updating employee details
	public ResponseEntity<Employee> updateEmployee(@PathVariable int empId, @RequestBody Employee admin1)
	{
		Employee employee = adminrepository.findById((int) empId).orElseThrow(null);

		employee.setEmpId(admin1.getEmpId());
		employee.setfName(admin1.getfName());
		employee.setlName(admin1.getlName());
		employee.setDob(admin1.getDob());
		employee.setGender(admin1.getGender());
		employee.setStreet(admin1.getStreet());
		employee.setLocation(admin1.getLocation());
		employee.setCity(admin1.getCity());
		employee.setState(admin1.getState());
		employee.setPincode(admin1.getPincode());
		employee.setMobNo(admin1.getMobNo());
		employee.setEmailId(admin1.getEmailId());
		employee.setPassword(admin1.getPassword());
		employee.setdesignation(admin1.getdesignation());
		
		Employee updatedEmployee = adminrepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}	
	
		@DeleteMapping("/{empId}") //deleting employee details
		public String deleteEmployee(@PathVariable int empId)
		{
			Employee employee = adminrepository.findById((int) empId).orElseThrow(null);
			
			adminrepository.delete(employee);
			return "deleted";
						
		}
	}
