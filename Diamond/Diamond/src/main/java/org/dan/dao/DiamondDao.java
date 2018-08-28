package org.dan.dao;

import java.util.List;
import java.util.Map;

import org.dan.entity.Diamond;

public interface DiamondDao {
	
	public List<Diamond> query(Map<String, String> params);

}
