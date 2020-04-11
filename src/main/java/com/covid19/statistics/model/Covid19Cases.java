package com.covid19.statistics.model;

import java.util.Date;
import java.util.Iterator;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;


public class Covid19Cases {

	long confirmed;
	long deaths;
	long recovered;
	Date date;
	
	public Covid19Cases() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Covid19Cases(long confirmed, long deaths, long recovered, Date date) {
		super();
		this.confirmed = confirmed;
		this.deaths = deaths;
		this.recovered = recovered;
		this.date = date;
	}
	
	@JsonProperty("result")
	private void unpackNameFromNestedObject(Map<String, Covid19Cases> result) {
		Covid19Cases covid = new Covid19Cases();
		Iterator<Covid19Cases> itr = result.values().iterator();
		if(itr.hasNext()) {
			covid = itr.next();
		}
		confirmed = covid.getConfirmed();
		deaths = covid.getDeaths();
		recovered = covid.getRecovered();
	}
	
	public long getConfirmed() {
		return confirmed;
	}
	public void setConfirmed(long confirmed) {
		this.confirmed = confirmed;
	}
	public long getDeaths() {
		return deaths;
	}
	public void setDeaths(long deaths) {
		this.deaths = deaths;
	}
	public long getRecovered() {
		return recovered;
	}
	public void setRecovered(long recovered) {
		this.recovered = recovered;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Covid19Cases [confirmed=" + confirmed + ", deaths=" + deaths + ", recovered=" + recovered + ", date="
				+ date + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (confirmed ^ (confirmed >>> 32));
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + (int) (deaths ^ (deaths >>> 32));
		result = prime * result + (int) (recovered ^ (recovered >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Covid19Cases other = (Covid19Cases) obj;
		if (confirmed != other.confirmed)
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (deaths != other.deaths)
			return false;
		if (recovered != other.recovered)
			return false;
		return true;
	}
	
}