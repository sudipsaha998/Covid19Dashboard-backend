package com.covid19.statistics.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.covid19.statistics.model.Covid19Stats;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin
@RequestMapping("/global")
public class GlobalCasesController {
	
	WebClient client = WebClient.create("https://covidapi.info/api/v1");
	
	@GetMapping("/latest")
	public Mono<Covid19Stats> getLatestAllCountryStat(){
		Mono<Covid19Stats> mono = client.get()
				  .uri("/global/latest")
				  .retrieve()
				  .bodyToMono(Covid19Stats.class);
		
		return mono;
	}
	
	@GetMapping("/date")
	public Mono<Covid19Stats> getLatestGlobalDateStat(){
		Mono<Covid19Stats> mono = client.get()
				  .uri("/global/count")
				  .retrieve()
				  .bodyToMono(Covid19Stats.class);
		
		return mono;
	}
	
	@GetMapping("/total")
	public Mono<Covid19Stats> getLatestGlobalCount(){
		Mono<Covid19Stats> mono = client.get()
				  .uri("/global")
				  .retrieve()
				  .bodyToMono(Covid19Stats.class);
		
		return mono;
	}

}
