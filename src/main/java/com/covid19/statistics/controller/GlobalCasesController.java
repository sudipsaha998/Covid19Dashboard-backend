package com.covid19.statistics.controller;

import java.util.concurrent.TimeUnit;

import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<Mono<Covid19Stats>> getLatestAllCountryStat() {
		Mono<Covid19Stats> mono = client.get().uri("/global/latest").retrieve().bodyToMono(Covid19Stats.class);

		ResponseEntity<Mono<Covid19Stats>> latestStatResponse = ResponseEntity.ok()
				.cacheControl(CacheControl.maxAge(12, TimeUnit.HOURS)).body(mono);

		return latestStatResponse;
	}

	@GetMapping("/date")
	public Mono<Covid19Stats> getLatestGlobalDateStat() {
		Mono<Covid19Stats> mono = client.get().uri("/global/count").retrieve().bodyToMono(Covid19Stats.class);

		return mono;
	}

	@GetMapping("/total")
	public Mono<Covid19Stats> getLatestGlobalCount() {
		Mono<Covid19Stats> mono = client.get().uri("/global").retrieve().bodyToMono(Covid19Stats.class);

		return mono;
	}

}
