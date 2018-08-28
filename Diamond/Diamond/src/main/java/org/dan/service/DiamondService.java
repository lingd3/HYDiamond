package org.dan.service;

import java.util.List;
import java.util.Map;

import org.dan.entity.Diamond;

public interface DiamondService {

	public List<Diamond> query(Map<String, String> params);
	
}
