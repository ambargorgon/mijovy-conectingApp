export const SELECTED_CATEGORY = "SELECTED_CATEGORY" //string para entrar en un switch despues

export const selectedCategory = id => ({
    type: SELECTED_CATEGORY,
    categoryId: id,  
})
