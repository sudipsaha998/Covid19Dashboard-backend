package com.covid19.statistics.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.AsyncHandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


@Component
public class ResponseheaderInterceptor implements AsyncHandlerInterceptor{

	
	public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response,
			Object handler) throws Exception {
		response.addHeader("Cache-Control", "max-age=21600");
	}
}
