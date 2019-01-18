package com.cybermate.drug.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@SpringBootApplication
@ComponentScan(basePackages="com.cybermate.drug.main.controller,com.cybermate.drug.service")

@EntityScan({"com.cybermate.drug.model"})
@EnableJpaRepositories("com.cybermate.drug.repository")
public class MyApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyApplication.class, args);

	}

}
