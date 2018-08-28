package org.dan.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dan.entity.Diamond;
import org.dan.service.DiamondServiceImpl;
import org.dan.util.EncodingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DiamondController {
	
	@Autowired
	private DiamondServiceImpl diamondService;

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	@ResponseBody
	public String test() {
		return "test";
	}
	
	@RequestMapping(value = "/query", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getDiamond(@RequestParam(value = "shape", required = false)String shape,
										  @RequestParam(value = "color", required = false)String color,
										  @RequestParam(value = "clarity", required = false)String clarity,
										  @RequestParam(value = "cut", required = false)String cut,
										  @RequestParam(value = "polish", required = false)String polish,
										  @RequestParam(value = "symmetry", required = false)String symmetry,
										  @RequestParam(value = "fluorescence", required = false)String fluorescence,
										  @RequestParam(value = "brown", required = false)String brown,
										  @RequestParam(value = "carat1", required = false)String carat1,
										  @RequestParam(value = "carat2", required = false)String carat2,
										  @RequestParam(value = "price1", required = false)String price1,
										  @RequestParam(value = "price2", required = false)String price2,
										  @RequestParam(value = "orderby", required = false)String orderby,
										  @RequestParam(value = "order", required = false)String order,
										  @RequestParam(value = "page", required = false)String page) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Diamond> diamonds = new ArrayList<Diamond>();
		try {
			Map<String, String> params = new HashMap<String, String>();
			if (shape != null) params.put("shape", EncodingUtil.encodeStr(shape));
			if (color != null) params.put("color", EncodingUtil.encodeStr(color));
			if (clarity != null) params.put("clarity", EncodingUtil.encodeStr(clarity));
			if (cut != null) params.put("cut", EncodingUtil.encodeStr(cut));
			if (polish != null) params.put("polish", EncodingUtil.encodeStr(polish));
			if (symmetry != null) params.put("symmetry", EncodingUtil.encodeStr(symmetry));
			if (fluorescence != null) params.put("fluorescence", EncodingUtil.encodeStr(fluorescence));
			if (brown != null) params.put("brown", EncodingUtil.encodeStr(brown));
			if (carat1 != null) params.put("carat1", EncodingUtil.encodeStr(carat1));
			if (carat2 != null) params.put("carat2", EncodingUtil.encodeStr(carat2));
			if (price1 != null) params.put("price1", EncodingUtil.encodeStr(price1));
			if (price2 != null) params.put("price2", EncodingUtil.encodeStr(price2));
			if (orderby != null) params.put("orderby", EncodingUtil.encodeStr(orderby));
			if (order != null) params.put("order", EncodingUtil.encodeStr(order));
			if (page != null) params.put("page", EncodingUtil.encodeStr(page));
			diamonds = diamondService.query(params);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("status", 500);
			map.put("data", null);
			return map;
		}
		map.put("status", 200);
		map.put("data", diamonds);
		return map;
	}
	
}









