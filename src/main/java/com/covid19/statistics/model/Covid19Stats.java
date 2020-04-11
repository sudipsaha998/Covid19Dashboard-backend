package com.covid19.statistics.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnySetter;

public class Covid19Stats {

	long count;
	Date date;
	Object result;
//	List<Map<String, Covid19Cases>> result = new ArrayList<Map<String, Covid19Cases>>();

	public Covid19Stats() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Covid19Stats(long count, Date date, List<Map<String, Covid19Cases>> result) {
		super();
		this.count = count;
		this.date = date;
		this.result = result;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Object getResult() {
		return result;
	}
	/*
	 * @JsonAnySetter public void setResult(String key, Covid19Cases stat) {
	 * this.result.add(new HashMap<String, Covid19Cases>() { { put(key, stat); } });
	 * }
	 */

	public void setResult(Object result) {
		this.result = result;
	}

}
