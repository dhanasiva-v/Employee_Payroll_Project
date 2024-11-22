package com.emp.payroll.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.exception.ResourceNotFoundException;
import com.emp.payroll.model.Leave;
import com.emp.payroll.repository.LeaveRepository;


@CrossOrigin(origins ="http://localhost:4200/")
@RestController
@RequestMapping("/employeepayroll/leave/")
public class LeaveController {
	
	@Autowired
	private LeaveRepository leaveRepository;
		
	@GetMapping("/{empId}")
	public Optional<Leave> getEmployeeById(@PathVariable Long empId)
	{
		
		System.out.println(leaveRepository.findById(empId));
		return leaveRepository.findById(empId);
	}
	//get all Employees
	@GetMapping("/leaves")
	public List<Leave> getAllEmployees(){
		return leaveRepository.findAll();
	}
     @PostMapping("/leaves")
	public Leave createL(@RequestBody Leave leave) {
		return  leaveRepository.save(leave);
		
	}
     
     @DeleteMapping("/leaves/{empId}")
 	public String deleteLeave(@PathVariable Long empId){
 		Leave leave = leaveRepository.findById(empId)
 				.orElseThrow(() -> new ResourceNotFoundException("Leave not exist with id :" + empId));
 		
 		leaveRepository.delete(leave);
 		return "Deleted";
 	}
}
