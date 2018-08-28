package org.dan.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.dan.entity.Diamond;
import org.dan.util.DBSessionUtil;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

/**
 * Dao层
 * @author gd
 *
 */
@Repository
public class DiamondDaoImpl implements DiamondDao {
	
	/*
	 * 根据条件查询
	 */
	public List<Diamond> query(Map<String, String> params) {
		List<Diamond> diamonds = new ArrayList<Diamond>();
		Session session = DBSessionUtil.getSession();
		
		StringBuilder sb = new StringBuilder("select d from Diamond d where 1=1");
		double carat1 = -1, carat2 = -1;
		String orderby = null, order = null;
		int page = 0, price1 = -1, price2 = -1;
		if (params.size() != 0) {
			for (Entry<String, String> entry : params.entrySet()) {
				if (entry.getKey() == "carat1") {
					carat1 = Double.valueOf(entry.getValue());
					continue;
				}
				if (entry.getKey() == "carat2") {
					carat2 = Double.valueOf(entry.getValue());
					continue;
				}
				if (entry.getKey() == "price1") {
					price1 = Integer.valueOf(entry.getValue());
					continue;
				}
				if (entry.getKey() == "price2") {
					price2 = Integer.valueOf(entry.getValue());
					continue;
				}
				if (entry.getKey() == "orderby") {
					orderby = entry.getValue();
					continue;
				}
				if (entry.getKey() == "order") {
					order = entry.getValue();
					continue;
				}
				if (entry.getKey() == "page") {
					page = Integer.valueOf(entry.getValue());
					continue;
				}
				else {
					String temp = entry.getValue();
					if (temp.indexOf(",") == -1) {
						sb.append(" and d." + entry.getKey() + "=\'" + entry.getValue() + "\'");
					}
					else {
						String[] conditions = temp.split(",");
						sb.append(" and (");
						for (int i = 0; i < conditions.length-1; i++) {
							sb.append("d." + entry.getKey() + "=\'" + conditions[i] + "\' or ");
						}
						sb.append("d." + entry.getKey() + "=\'" + conditions[conditions.length-1] + "\')");
					}
				}
			}
			if (carat1 != -1) sb.append(" and d.carat>=" + carat1);
			if (carat2 != -1) sb.append(" and d.carat<" + carat2);
			if (price1 != -1) sb.append(" and d.rmb>=" + price1);
			if (price2 == -1) sb.append(" and d.rmb<20000000");
			else if (price2 != -1) sb.append(" and d.rmb<" + price2);
			
			if (orderby != null) {
				if (order != null) sb.append(" order by " + orderby + " DESC");
				else sb.append(" order by " + orderby + " ASC");
			}
		}
		System.out.println(sb.toString());
		Query query = session.createQuery(sb.toString());
		query.setFirstResult(page*30);
		query.setMaxResults(30);
		diamonds = query.list();
		System.out.println("size: " + diamonds.size());
		DBSessionUtil.closeSession(session);
		return diamonds;
	}

}




