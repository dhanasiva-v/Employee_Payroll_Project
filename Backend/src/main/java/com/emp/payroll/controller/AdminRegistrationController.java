package com.emp.payroll.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.payroll.model.Admin;
import com.emp.payroll.repository.AdminRegistrationRepository;

@RestController
public class AdminRegistrationController {
	
	//private AdminRegistrationService service;
	
	@Autowired
	private AdminRegistrationRepository AdminRegistrationRepository;
	
	@PostMapping("/register")
	@CrossOrigin(origins ="http://localhost:4200/")
	public Admin registerAdmin(@RequestBody Admin adm) throws Exception{
		String tempEmailId = adm.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId))
		{
			Admin empobj = AdminRegistrationRepository.findByEmailId(tempEmailId);
			if(empobj != null)
			{
				throw new Exception("Admin with "+tempEmailId+" is already exists");
			}
			
		}
		Admin admObj=null;
		admObj = AdminRegistrationRepository.save(adm);
		return admObj;
	}
	@PostMapping("/login")
	@CrossOrigin(origins ="http://localhost:4200/")
	public Admin loginadm(@RequestBody Admin adm) throws Exception {
		String tempEmailId = adm.getEmailId();
		String tempPass=adm.getPassword();
		Admin admObj = null;
		if(tempEmailId != null && tempPass != null ) {
			admObj = AdminRegistrationRepository.findByEmailIdAndPassword(tempEmailId, tempPass);
			
		}
		if(admObj ==null) {
			throw new Exception("Bad  Credentials");
		}
			
		return admObj;

	}
}