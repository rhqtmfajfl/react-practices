package com.example.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
//이 @ 를 해주기 위해서  C:\Users\polar\.m2\repository\org\projectlombok\lombok\1.18.22 이 위치의 파일 선택 후 
//install을 해주는 데 sts-release에서 
public class EmaillistVo {
	private Long no;
	private String firstName;
	private String lastName;
	private String email;
	
	//이부분을 지우면 mybatis에서
//	public EmaillistVo(Long no, String firstName, String lastName, String email) {
//		this.no = no;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.email = email;
//	}
	//mappers에서 configuration에서 <setting name="mapUnderscoreToCamelCase" value="true" />
	
	//Lombok 설치시 주석 처리 했음
//	public Long getNo() {
//		return no;
//	}
//	public void setNo(Long no) {
//		this.no = no;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	
	
}
