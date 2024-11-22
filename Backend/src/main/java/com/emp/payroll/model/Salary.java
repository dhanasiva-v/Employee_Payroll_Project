
package com.emp.payroll.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(initialValue=1, name = "seq", allocationSize=1)

public class Salary {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int salId;
	private int empId;
	private Double pfAmount;
	private String tranDate;
	private Double basicPay;
	private Double da;
	private Double hra;
	private Double	grossSalary;
	private Double tax;
	private Double deduction;
	private Double netPay;
	
	
	public Salary()
	{
		
	}
	
	public Salary(int salId, int empId, Double pfAmount, String tranDate, Double basicPay, Double da, Double hra,
			Double grossSalary, Double tax, Double deduction, Double netPay) {
		super();
		this.salId = salId;
		this.empId = empId;
		this.pfAmount = pfAmount;
		this.tranDate = tranDate;
		this.basicPay = basicPay;
		this.da = da;
		this.hra = hra;
		this.grossSalary = grossSalary;
		this.tax = tax;
		this.deduction = deduction;
		this.netPay = netPay;
	}




	public int getSalId() {
		return salId;
	}


	public void setSalId(int salId) {
		this.salId = salId;
	}


	public int getEmpId() {
		return empId;
	}


	public void setEmpId(int empId) {
		this.empId = empId;
	}


	public Double getPfAmount() {
		return pfAmount;
	}


	public void setPfAmount(Double pfAmount) {
		this.pfAmount = pfAmount;
	}


	public String getTranDate() {
		return tranDate;
	}


	public void setTranDate(String tranDate) {
		this.tranDate = tranDate;
	}


	public Double getBasicPay() {
		return basicPay;
	}


	public void setBasicPay(Double basicPay) {
		this.basicPay = basicPay;
	}


	public Double getDa() {
		return da;
	}


	public void setDa(Double da) {
		this.da = da;
	}


	public Double getHra() {
		return hra;
	}


	public void setHra(Double hra) {
		this.hra = hra;
	}


	public Double getGrossSalary() {
		return grossSalary;
	}


	public void setGrossSalary(Double grossSalary) {
		this.grossSalary = grossSalary;
	}


	public Double getTax() {
		return tax;
	}


	public void setTax(Double tax) {
		this.tax = tax;
	}


	public Double getDeduction() {
		return deduction;
	}


	public void setDeduction(Double deduction) {
		this.deduction = deduction;
	}


	public Double getNetPay() {
		return netPay;
	}


	public void setNetPay(Double netPay) {
		this.netPay = netPay;
	}

	

}