package com.emp.payroll.repository;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.emp.payroll.model.Timesheet;



@Repository
public interface TimesheetRepository extends CrudRepository<Timesheet, Integer> {

}