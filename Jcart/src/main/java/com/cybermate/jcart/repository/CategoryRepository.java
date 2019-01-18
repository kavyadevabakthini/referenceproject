package com.cybermate.jcart.repository;

import org.springframework.data.repository.CrudRepository;

import com.cybermate.jcart.model.Category;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
	
	public Category getCategoryByName(String name) ;

	}


