export default {
  type: "object",
  properties: {
    product_name: { type: "string", description: "Name of the food product" },
    brand: { type: "string", description: "Brand or manufacturer name" },
    serving_size: { type: "string", description: "Serving size information" },
    ingredients: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string", description: "Ingredient name" },
          category: { 
            type: "string", 
            enum: ["natural", "additive", "preservative", "sweetener", "coloring", "flavor", "emulsifier", "other"],
            description: "Category of ingredient"
          },
          concern_level: { 
            type: "string", 
            enum: ["safe", "moderate", "caution", "avoid", "unknown"],
            description: "Health concern level"
          },
          explanation: { type: "string", description: "Brief explanation of what this ingredient is" }
        },
        required: ["name"]
      }
    },
    allergens: {
      type: "array",
      items: { type: "string" },
      description: "List of allergens present"
    },
    nutrition_highlights: {
      type: "object",
      properties: {
        calories: { type: "string" },
        sugar: { type: "string" },
        sodium: { type: "string" },
        protein: { type: "string" },
        fat: { type: "string" }
      }
    },
    dietary_flags: {
      type: "array",
      items: { type: "string" },
      description: "e.g., vegetarian, vegan, gluten-free, contains dairy"
    },
    overall_assessment: { 
      type: "string", 
      description: "Brief overall assessment of the product" 
    }
  },
  required: ["product_name", "ingredients"]
};
//hello i am anubhav