package com.example.demo.repository;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.vo.CardVo;
import com.example.demo.vo.TaskVo;

@Repository
public class KanbanRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<CardVo> findAll(String keyword) {
		return sqlSession.selectList("card.findAll", keyword);
	}

	public List<TaskVo> findAllTask(long no) {
		
		return sqlSession.selectList("task.findAllTask", no);
	}

	public Boolean insert(TaskVo vo) {
		return sqlSession.insert("task.insert", vo) == 1;		
	}

	public Boolean delete(TaskVo vo) {
		return sqlSession.delete("task.delete") == 1;
		
	}
	


}
