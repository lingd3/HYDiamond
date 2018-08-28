package org.dan.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 砖石类
 * 
 * @author gd
 *
 */
@Entity
@Table(name = "Diamond")
public class Diamond {
	private int id; // 货号
	private String place; // 地点
	private String status; // 状态
	private int deliveryTime; // 货期
	private String shape; // 形状
	private double carat; // 重量
	private String color; // 颜色
	private String clarity; // 净度
	private String cut; // 切工
	private String polish; // 抛光
	private String symmetry; // 对称
	private String fluorescence; // 荧光
	private double diameter; // 直径
	private int dollar; // 国际美金
	private double discount; // 折扣
	private int rmb; // RMB\粒
	private String brown; // 咖色
	private String milk; // 奶色

	public Diamond() {
	}

	public Diamond(int id) {
		this.id = id;
	}

	public Diamond(int id, String place, String status, int deliveryTime, String shape, double carat, String color,
			String clarity, String cut, String polish, String symmetry, String fluorescence, double diameter,
			int dollar, double discount, int rmb, String brown, String milk) {
		this.id = id;
		this.place = place;
		this.status = status;
		this.deliveryTime = deliveryTime;
		this.shape = shape;
		this.carat = carat;
		this.color = color;
		this.clarity = clarity;
		this.cut = cut;
		this.polish = polish;
		this.symmetry = symmetry;
		this.fluorescence = fluorescence;
		this.diameter = diameter;
		this.dollar = dollar;
		this.discount = discount;
		this.rmb = rmb;
		this.brown = brown;
		this.milk = milk;
	}

	@Id
	@Column(name = "id", nullable = false)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "place", length = 20)
	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	@Column(name = "status", length = 20)
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Column(name = "deliveryTime")
	public int getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(int deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	@Column(name = "shape", length = 20)
	public String getShape() {
		return shape;
	}

	public void setShape(String shape) {
		this.shape = shape;
	}

	@Column(name = "carat")
	public double getCarat() {
		return carat;
	}

	public void setCarat(double carat) {
		this.carat = carat;
	}

	@Column(name = "color", length = 20)
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	@Column(name = "clarity", length = 20)
	public String getClarity() {
		return clarity;
	}

	public void setClarity(String clarity) {
		this.clarity = clarity;
	}

	@Column(name = "cut", length = 20)
	public String getCut() {
		return cut;
	}

	public void setCut(String cut) {
		this.cut = cut;
	}

	@Column(name = "polish", length = 20)
	public String getPolish() {
		return polish;
	}

	public void setPolish(String polish) {
		this.polish = polish;
	}

	@Column(name = "symmetry", length = 20)
	public String getSymmetry() {
		return symmetry;
	}

	public void setSymmetry(String symmetry) {
		this.symmetry = symmetry;
	}

	@Column(name = "fluorescence", length = 20)
	public String getFluorescence() {
		return fluorescence;
	}

	public void setFluorescence(String fluorescence) {
		this.fluorescence = fluorescence;
	}

	@Column(name = "diameter")
	public double getDiameter() {
		return diameter;
	}

	public void setDiameter(double diameter) {
		this.diameter = diameter;
	}

	@Column(name = "dollar")
	public int getDollar() {
		return dollar;
	}

	public void setDollar(int dollar) {
		this.dollar = dollar;
	}

	@Column(name = "discount")
	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	@Column(name = "rmb")
	public int getRmb() {
		return rmb;
	}

	public void setRmb(int rmb) {
		this.rmb = rmb;
	}

	@Column(name = "brown", length = 20)
	public String getBrown() {
		return brown;
	}

	public void setBrown(String brown) {
		this.brown = brown;
	}

	@Column(name = "milk", length = 20)
	public String getMilk() {
		return milk;
	}

	public void setMilk(String milk) {
		this.milk = milk;
	}

	@Override
	public String toString() {
		return "Diamond [id=" + id + ", place=" + place + ", status=" + status + ", deliveryTime=" + deliveryTime
				+ ", shape=" + shape + ", carat=" + carat + ", color=" + color + ", clarity=" + clarity + ", cut=" + cut
				+ ", polish=" + polish + ", symmetry=" + symmetry + ", fluorescence=" + fluorescence + ", diameter="
				+ diameter + ", dollar=" + dollar + ", discount=" + discount + ", rmb=" + rmb + ", brown=" + brown
				+ ", milk=" + milk + "]";
	}

}
