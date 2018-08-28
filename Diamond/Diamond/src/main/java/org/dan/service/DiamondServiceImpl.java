package org.dan.service;

import java.util.List;
import java.util.Map;

import org.dan.dao.DiamondDao;
import org.dan.dao.DiamondDaoImpl;
import org.dan.entity.Diamond;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service层
 * @author gd
 *
 */
@Service
public class DiamondServiceImpl implements DiamondService {

	@Autowired
	private DiamondDaoImpl diamondDao;
	
	/*
	 * 根据条件查询
	 */
	public List<Diamond> query(Map<String, String> params) {
		return diamondDao.query(params);
	}

}
