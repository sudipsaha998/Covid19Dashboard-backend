package com.covid19.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.covid19.statistics.interceptors.ResponseheaderInterceptor;

@Configuration
public class Covid19StatConfig implements WebMvcConfigurer{

	@Autowired
	ResponseheaderInterceptor redponseheaderInterceptor;
	
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(redponseheaderInterceptor);
	}
}
