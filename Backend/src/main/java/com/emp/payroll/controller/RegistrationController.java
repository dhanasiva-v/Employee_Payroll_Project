package com.emp.payroll.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.payroll.repository.RegistrationRepository;
import com.emp.payroll.model.Employee;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationRepository RegistrationRepository;
	//private RegistrationService service;
	
	@PostMapping("/employees")
	@CrossOrigin(origins = "http://localhost:4200/")
	public Employee registerEmployee(@RequestBody Employee emp) throws Exception{
		String tempEmailId = emp.getEmailId();
		if(tempEmailId != null)
		{
			Employee empobj = RegistrationRepository.findByEmailId(tempEmailId);
			if(empobj != null)
			{	System.out.println("tempid"+tempEmailId);
				throw new Exception("Employee with "+tempEmailId+" is already exists");
			}
			
		}
		Employee empObj=null;
		empObj = RegistrationRepository.save(emp);
		return empObj;
	}
	
	@PostMapping("/employees/login")
	@CrossOrigin(origins = "http://localhost:4200/")
	public Employee loginEmp(@RequestBody Employee emp) throws Exception {
		String tempEmailId = emp.getEmailId();
		String tempPass=emp.getPassword();
		Employee empObj = null;
		if(tempEmailId != null && tempPass != null ) {
			empObj = RegistrationRepository.findByEmailIdAndPassword(tempEmailId, tempPass);
			
		}
		if(empObj ==null) {
			throw new Exception("Bad  Credentials");
		}
			//System.out.println(empObj.getEmailId());
			
		return empObj;
	
	}
	
	@PutMapping("/forgotpassword")
	@CrossOrigin(origins = "http://localhost:4200/")
	public Employee forgotpasswordemp(@RequestBody Employee emp) throws Exception {
		String tempEmailId = emp.getEmailId();
		String tempMobNo = emp.getMobNo();
		Employee empObj = null;
		if(tempEmailId != null && tempMobNo != null ) {
			empObj = RegistrationRepository.findByEmailIdAndMobNo(tempEmailId, tempMobNo);		
		}
		if(empObj ==null) {
			throw new Exception("No Employee found with these credentials!");
		}
			
		return empObj;
	
	}

}