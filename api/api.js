{
  "api_base": "https://megaahorros.dijoaeromaritime.com/api/v1",
  "authentication": "Bearer Token (JWT)",
  "endpoints": {
    "products": {
      "list": {
        "method": "GET",
        "path": "/products",
        "params": {
          "category": "string",
          "search": "string",
          "page": "number",
          "limit": "number",
          "sort": "string",
          "stock_status": "in_stock|out_of_stock|low_stock"
        }
      },
      "create": {
        "method": "POST",
        "path": "/products",
        "body": {
          "title": "string (required)",
          "sku": "string (required, unique)",
          "category_id": "number (required)",
          "subcategory_id": "number",
          "description_short": "string",
          "description_long": "text",
          "specifications": "json",
          "images": ["url1", "url2"],
          "price_base": "decimal (required)",
          "price_tiers": [
            {"qty_min": 100, "price": 8.75},
            {"qty_min": 500, "price": 8.25}
          ],
          "weight_kg": "decimal",
          "dimensions": {"length": 0, "width": 0, "height": 0},
          "brand": "string",
          "origin_country": "string",
          "hs_code": "string",
          "stock": [
            {"warehouse_id": 1, "quantity": 5420}
          ],
          "tags": ["tag1", "tag2"],
          "status": "active|inactive"
        }
      },
      "update": {
        "method": "PUT",
        "path": "/products/{id}"
      },
      "delete": {
        "method": "DELETE",
        "path": "/products/{id}"
      },
      "import": {
        "method": "POST",
        "path": "/products/import",
        "content-type": "multipart/form-data",
        "body": {
          "file": "CSV file",
          "mapping": "json"
        }
      },
      "export": {
        "method": "GET",
        "path": "/products/export",
        "params": {
          "format": "csv|xlsx|json",
          "filters": "json"
        }
      }
    },
    "combos": {
      "list": {
        "method": "GET",
        "path": "/combos"
      },
      "create": {
        "method": "POST",
        "path": "/combos",
        "body": {
          "title": "string (required)",
          "description": "string",
          "products": [
            {"product_id": 123, "quantity": 2},
            {"product_id": 456, "quantity": 1}
          ],
          "combo_price": "decimal (required)",
          "regular_price": "decimal",
          "stock_mode": "independent|dependent",
          "stock_quantity": "number",
          "valid_from": "datetime",
          "valid_until": "datetime",
          "max_per_customer": "number",
          "status": "active|scheduled|expired"
        }
      },
      "update": {
        "method": "PUT",
        "path": "/combos/{id}"
      },
      "delete": {
        "method": "DELETE",
        "path": "/combos/{id}"
      }
    },
    "quotations": {
      "list": {
        "method": "GET",
        "path": "/quotations",
        "params": {
          "status": "pending|sent|accepted|rejected",
          "customer_id": "number"
        }
      },
      "create": {
        "method": "POST",
        "path": "/quotations",
        "body": {
          "customer_id": "number (required)",
          "container_type": "20|40|40hc",
          "products": [
            {"product_id": 123, "quantity": 1000}
          ],
          "subtotal": "decimal",
          "discount_volume": "decimal",
          "freight_cost": "decimal",
          "insurance": "decimal",
          "incoterm": "FOB|CIF|EXW|etc",
          "port_origin": "string",
          "port_destination": "string",
          "estimated_delivery": "date",
          "notes": "text"
        }
      },
      "export_pdf": {
        "method": "GET",
        "path": "/quotations/{id}/pdf"
      },
      "send_email": {
        "method": "POST",
        "path": "/quotations/{id}/send",
        "body": {
          "to_email": "string",
          "message": "string"
        }
      }
    },
    "orders": {
      "list": {
        "method": "GET",
        "path": "/orders"
      },
      "details": {
        "method": "GET",
        "path": "/orders/{id}"
      },
      "update_status": {
        "method": "PATCH",
        "path": "/orders/{id}/status",
        "body": {
          "status": "pending|processing|shipped|delivered|cancelled"
        }
      }
    },
    "inventory": {
      "stock_levels": {
        "method": "GET",
        "path": "/inventory/stock"
      },
      "low_stock_alerts": {
        "method": "GET",
        "path": "/inventory/low-stock",
        "params": {
          "threshold": "number"
        }
      },
      "update_stock": {
        "method": "PATCH",
        "path": "/inventory/stock/{product_id}",
        "body": {
          "warehouse_id": "number",
          "quantity": "number",
          "operation": "add|subtract|set"
        }
      },
      "movements": {
        "method": "GET",
        "path": "/inventory/movements",
        "params": {
          "product_id": "number",
          "warehouse_id": "number",
          "date_from": "date",
          "date_to": "date"
        }
      }
    },
    "customers": {
      "list": {
        "method": "GET",
        "path": "/customers",
        "params": {
          "type": "wholesale|retail|distributor"
        }
      },
      "details": {
        "method": "GET",
        "path": "/customers/{id}"
      },
      "update_tier": {
        "method": "PATCH",
        "path": "/customers/{id}/tier",
        "body": {
          "tier": "bronze|silver|gold|platinum"
        }
      }
    },
    "categories": {
      "list": {
        "method": "GET",
        "path": "/categories"
      },
      "create": {
        "method": "POST",
        "path": "/categories",
        "body": {
          "name": "string",
          "parent_id": "number|null",
          "description": "string",
          "image_url": "string",
          "slug": "string"
        }
      }
    },
    "analytics": {
      "dashboard_stats": {
        "method": "GET",
        "path": "/analytics/dashboard"
      },
      "sales_report": {
        "method": "GET",
        "path": "/analytics/sales",
        "params": {
          "date_from": "date",
          "date_to": "date",
          "group_by": "day|week|month"
        }
      },
      "top_products": {
        "method": "GET",
        "path": "/analytics/top-products",
        "params": {
          "period": "7d|30d|90d|1y",
          "limit": "number"
        }
      }
    }
  },
  "error_codes": {
    "400": "Bad Request - Invalid parameters",
    "401": "Unauthorized - Invalid or missing token",
    "403": "Forbidden - Insufficient permissions",
    "404": "Not Found - Resource doesn't exist",
    "422": "Unprocessable Entity - Validation errors",
    "500": "Internal Server Error"
  }
}