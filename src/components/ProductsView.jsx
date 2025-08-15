import { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { OverlayPanel } from "primereact/overlaypanel";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { Pencil, Trash2 } from "lucide-react";
import { Search } from "lucide-react";

const ProductsView = ({ allProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [layout, setLayout] = useState("grid"); // 'grid' or 'list'
  const allColumns = [
    { field: "name", header: "Product" },
    { field: "category", header: "Category" },
    { field: "sales_price", header: "Price" },
    { field: "stock_quantity", header: "Stock" },
  ];
  const [selectedColumns, setSelectedColumns] = useState(allColumns);
  const op = useRef(null);

  const categoryOptions = [
    { label: "All Categories", value: "All" },
    ...Array.from(new Set(allProducts.map((p) => p.category))).map((cat) => ({
      label: cat,
      value: cat,
    })),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const statusTemplate = (rowData) => {
    let status = "";
    if (rowData.stock_quantity === 0) {
      status = "Out of Stock";
    } else if (rowData.stock_quantity <= rowData.reorder_threshold) {
      status = "Low Stock";
    } else {
      status = "In Stock";
    }

    const severityMap = {
      "In Stock": "success",
      "Low Stock": "warning",
      "Out of Stock": "danger",
    };

    return <Tag value={status} severity={severityMap[status]} />;
  };

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button icon={<Pencil size={16} />} severity="warning" rounded text />
      <Button icon={<Trash2 size={16} />} severity="danger" rounded text />
    </div>
  );

  const getVisibleColumns = () =>
    selectedColumns.map((col) => (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        body={col.field === "status" ? statusTemplate : null}
      />
    ));

  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {filteredProducts?.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          className=" shadow-md border border-gray-100"
        >
          <p className="text-lg mb-1">₦{product.sales_price}</p>
          <p className="text-lg mb-1">Stock: {product.stock_quantity}</p>
          {statusTemplate(product)}
          <div className="mt-2">{actionTemplate()}</div>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <DataTable value={filteredProducts} responsiveLayout="scroll">
      {getVisibleColumns()}
      <Column header="Status" body={statusTemplate} />
      <Column header="Actions" body={actionTemplate} />
    </DataTable>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 space-y-2 md:space-y-0 md:items-center md:justify-between my-6">
        <Dropdown
          value={selectedCategory}
          options={categoryOptions}
          onChange={(e) => setSelectedCategory(e.value)}
          placeholder="Filter by Category"
          optionLabel="label"
          className="px-4 border rounded-md font-semibold text-xs"
        />

        <div className="relative md:mr-40">
          <Button
            icon="pi pi-sliders-h"
            label="Filter"
            disabled={layout === "grid"}
            className="border px-6 py-2"
            onClick={(e) => op.current.toggle(e)}
          />

          <OverlayPanel ref={op}>
            <MultiSelect
              value={selectedColumns}
              onChange={(e) => setSelectedColumns(e.value)}
              options={allColumns}
              optionLabel="header"
              maxSelectedLabels={3}
              className="w-full md:w-20rem "
            />
          </OverlayPanel>
        </div>

        <div className="flex gap-2">
          <Button
            icon="pi pi-table"
            label="Table"
            className={`border px-6 py-2 ${
              layout === "list" ? "bg-gray-200" : ""
            }`}
            onClick={() => setLayout("list")}
          />
          <Button
            icon="pi pi-th-large"
            label="Columns"
            className={`border px-6 py-2 ${
              layout === "grid" ? "bg-gray-200" : ""
            }`}
            onClick={() => setLayout("grid")}
          />
        </div>
        <div className="relative w-full md:w-auto">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
            <Search className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search Products"
            className=" pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4 min-w-full">
        {layout === "list" ? renderListView() : renderGridView()}
      </div>
    </>
  );
};

export default ProductsView;
