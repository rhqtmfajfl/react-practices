 package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.KanbanRepository;
import com.example.demo.vo.TaskVo;
import com.example.demo.vo.TaskVo;



@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private KanbanRepository kanbanRepository;
	
	//@Autowired
	//private CardRepository cardRepository;   //CardRepository를 만든다.
	
	//get 방식으로 연결하기 위한 방법
	@GetMapping("/card")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
//		System.out.println("gg");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanRepository.findAll(keyword)));
		//.body(JsonResult.success(cardRepository.findAll()));  //JsonResult는 api에서는 사용 하지 않는다.
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readtask(@RequestParam(value="no", required=true, defaultValue="") long no) {
		System.out.println(kanbanRepository.findAllTask(no));
		System.out.println(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanRepository.findAllTask(no)));
		//.body(JsonResult.success(cardRepository.findAll()));  //JsonResult는 api에서는 사용 하지 않는다.
	}
	
	@PostMapping("/task")  //json 형태로 변환
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo) {
		
		kanbanRepository.insert(vo);
		System.out.println("vo test ====================================");
//		System.out.println(vo);
		System.out.println("vo test ====================================");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@PostMapping("/delete")  //json 형태로 변환
	public ResponseEntity<JsonResult> delete(@RequestBody TaskVo vo) {
		
		kanbanRepository.delete(vo);
		System.out.println("vo test ====================================");
		System.out.println(vo);
		System.out.println("gg");
		System.out.println("vo test ====================================");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
}
