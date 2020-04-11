package com.covid19.statistics.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.covid19.statistics.model.Covid19Cases;
import com.covid19.statistics.model.Covid19Stats;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin
@RequestMapping("/country")
public class CountryCasesController {

WebClient client = WebClient.create("https://covidapi.info/api/v1");
	
	@GetMapping("/{country}/latest")
	public Mono<Covid19Cases> getLatestAllCountryStat(@PathVariable(name="country") String country){
		Mono<Covid19Cases> mono = client.get()
				  .uri("/country/"+country+"/latest")
				  .retrieve()
				  .bodyToMono(Covid19Cases.class);
		
		return mono;
	}
	
}
