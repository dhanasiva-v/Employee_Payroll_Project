package com.emp.payroll.controller;

import java.util.List;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.exception.ResourceNotFoundException;
import com.emp.payroll.model.Attendance;
import com.emp.payroll.model.Employee;
import com.emp.payroll.model.Salary;
import com.emp.payroll.repository.AttendanceRepository;


@CrossOrigin(origins ="http://localhost:4200/")
@RestController
@RequestMapping("/employeepayroll/attend/")
public class AttendanceController {
	
	@Autowired
	private AttendanceRepository attendanceRepository;
	
	@GetMapping("/{empId}")
	public Optional<Attendance> getEmployeeById(@PathVariable long empId)
	{
		
		System.out.println(attendanceRepository.findById(empId));
		return attendanceRepository.findById(empId);
	}
	//get all Employees
	@GetMapping("/attendances")
	public List<Attendance> getAllEmployees(){
		return attendanceRepository.findAll();
	}
     @PostMapping("/attendances")
	public Attendance createAttendance(@RequestBody Attendance attendance) {
		return  attendanceRepository.save(attendance);
		
	}
     
     @DeleteMapping("/attendances/{empId}")
 	public String deleteEmployee(@PathVariable Long empId){
 		Attendance employee = attendanceRepository.findById(empId).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + empId));
 		
 		attendanceRepository.delete(employee);
 		return "deleted";
 		
 		}
}
