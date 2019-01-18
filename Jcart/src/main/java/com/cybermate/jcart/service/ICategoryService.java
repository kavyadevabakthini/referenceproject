package com.cybermate.jcart.service;

import java.util.List;

import com.cybermate.jcart.model.Category;

public interface ICategoryService {
	List<Category> getAllCategories();

	Category getCategoryById(int id);
	public Category getCategoryByName(String name);
	boolean addCategory(Category category);

	boolean updateCategory(Category category);

	void deleteCategory(int id);
}
