package com.cybermate.jcart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "categories")
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column(nullable=false, unique=true)
	private String name;
	@Column
	private String description;
	@Column
	private int displayOrder;
	@Column
	private boolean disabled;
	/*@OneToMany(mappedBy="category")
	private Set<Product> products;*/
	public Category() {
		super();
	}

	public Category(int id, String name, String description, int displayOrder, boolean disabled) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.displayOrder = displayOrder;
		this.disabled = disabled;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getDisplayOrder() {
		return displayOrder;
	}

	public void setDisplayOrder(int displayOrder) {
		this.displayOrder = displayOrder;
	}

	public boolean isDisabled() {
		return disabled;
	}

	public void setDisabled(boolean disabled) {
		this.disabled = disabled;
	}
	/*public Set<Product> getProducts()
	{
		return products;
	}
	public void setProducts(Set<Product> products)
	{
		this.products = products;
	}*/

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", description=" + description + ", displayOrder="
				+ displayOrder + ", disabled=" + disabled + "]";
	}

}
