package com.cybermate.jcart.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybermate.jcart.model.Category;
import com.cybermate.jcart.repository.CategoryRepository;
@Service
public class CategoryService implements ICategoryService {
	@Autowired
	CategoryRepository categoryRepository;

	public List<Category> getAllCategories() {
		List<Category> list = new ArrayList<>();
		categoryRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	public Category getCategoryById(int id) {
		Category obj = categoryRepository.findById(id).get();
		return obj;
	}

	public Category getCategoryByName(String name) {
		Category obj = categoryRepository.getCategoryByName(name);

		return obj;
	}

	public boolean addCategory(Category category) {
		Category persistedCategory = getCategoryByName(category.getName());
		if (persistedCategory != null) {
			return false;
		}
		categoryRepository.save(category);
		return true;
	}

	public boolean updateCategory(Category category) {
		Category persistedCategory = getCategoryById(category.getId());
		if (persistedCategory != null) {
			return false;
		}
		persistedCategory.setDescription(category.getDescription());
		persistedCategory.setDisplayOrder(category.getDisplayOrder());
		persistedCategory.setDisabled(category.isDisabled());
		categoryRepository.save(persistedCategory);
		return true;

	}

	public void deleteCategory(int id) {
		categoryRepository.delete(getCategoryById(id));

	}

}
