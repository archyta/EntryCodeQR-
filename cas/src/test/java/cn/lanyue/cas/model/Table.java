package cn.lanyue.cas.model;

import java.util.List;

public class Table {

	private String tableName;
	private List<Column> columnList = null;

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public List<Column> getColumnList() {
		return columnList;
	}

	public void setColumnList(List<Column> columnList) {
		this.columnList = columnList;
	}
	
	
}
