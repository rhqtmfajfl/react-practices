package com.example.demo.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j   //LOGGER을 log로 바꿔줌
@ControllerAdvice
public class GlobalExceptionHandler {
	private static final Log LOGGER = LogFactory.getLog(GlobalExceptionHandler.class);
	
	@ExceptionHandler(Exception.class)
	@ResponseBody  //스프링 웹 사용
	public ResponseEntity<JsonResult> ExceptionHandler(Exception e) throws Exception {
		//1. 로깅
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
//		LOGGER.error(errors.toString());
		log.error(errors.toString());

		//2 JSON 응답
		JsonResult result = JsonResult.fail(errors.toString());
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.fail(errors.toString()));
	}
}